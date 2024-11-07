import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

interface Props {
  title: string;
  description: string;
  imgUrl: string;
}

export function CardComponent(props: Props) {
  return (
    <Card className="mt-6 w-full max-w-sm mx-auto md:max-w-md lg:max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          src={props.imgUrl}
          alt="card-image"
          className="object-cover w-full h-full"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2 font-semibold text-lg md:text-xl lg:text-2xl">
          {props.title}
        </Typography>
        <Typography className="text-gray-600 text-base md:text-lg lg:text-xl">
          {props.description}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button color="blue" variant="filled" size="md" className="w-full md:w-auto">
          Read More
        </Button>
      </CardFooter>
    </Card>
  );
}
