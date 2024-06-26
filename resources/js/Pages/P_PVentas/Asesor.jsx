import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useState, useEffect } from "react";
export default function Index({ auth }) {


    return (

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                          <iframe title="Desarrollo de Contenido Login" height="1000px" width="100%" src="https://ventas.lineaitalia.mx/dym/cotizador_li/admin_usuarios.php" frameborder="0" allowFullScreen="true"></iframe>
                        </div>
                    </div>
                </div>
            </div>

    );
}
