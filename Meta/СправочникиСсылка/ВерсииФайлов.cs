
using System;
using System.IO;
using System.Globalization;
using System.Runtime.Serialization;
using ProtoBuf;/*https://github.com/ServiceStack/ServiceStack/tree/master/lib*/
using ServiceStack.Text;/*https://github.com/ServiceStack/ServiceStack.Text*/
using V82;
using V82.ОбщиеОбъекты;
using V82.СправочникиСсылка;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.СправочникиСсылка
{
	[ProtoContract]
	[DataContract]
	public partial class ВерсииФайлов:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("b895f316-ff2a-4e61-9aa3-b079ed364916");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221190855.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
		public static readonly long КонтрольнаяСуммаКласса = 123;
		[DataMember]
		[ProtoMember(1)]
		public Guid Ссылка {get;set;}
		[DataMember]
		[ProtoMember(2)]
		public long Версия {get;set;}
		/*static хэш сумма состава и порядка реквизитов*/
		/*версия класса восстановленного из пакета*/
		[DataMember]
		[ProtoMember(3)]
		public bool ПометкаУдаления {get;set;}
		[DataMember]
		[ProtoMember(4)]
		public bool Предопределенный {get;set;}
		[DataMember]
		[ProtoMember(5)]
		public string/*11*/ Код {get;set;}
		[DataMember]
		[ProtoMember(6)]
		public string/*150*/ Наименование {get;set;}
		///<summary>
		///Автор - пользователь, создавший версию
		///</summary>
		[DataMember]
		[ProtoMember(7)]
		public V82.СправочникиСсылка.Пользователи Автор {get;set;}
		///<summary>
		///Дата модификации файла - приведенная к Гринвичу (очищенная от смещения летнего времени и смещения зоны)
		///</summary>
		[DataMember]
		[ProtoMember(8)]
		public DateTime ДатаМодификацииУниверсальная {get;set;}//Дата модификации универсальная
		///<summary>
		///Дата создания версии
		///</summary>
		[DataMember]
		[ProtoMember(9)]
		public DateTime ДатаСоздания {get;set;}//Дата создания
		///<summary>
		///Файл версии зашифрован
		///</summary>
		[DataMember]
		[ProtoMember(10)]
		public bool Зашифрован {get;set;}
		///<summary>
		///Индекс иконки, соответствующей расширению файла, для показа в списке
		///</summary>
		[DataMember]
		[ProtoMember(11)]
		public decimal/*(10)*/ ИндексКартинки {get;set;}//Индекс картинки
		///<summary>
		///Комментарий к версии
		///</summary>
		[DataMember]
		[ProtoMember(12)]
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///Номер данной версии
		///</summary>
		[DataMember]
		[ProtoMember(13)]
		public decimal/*(5)*/ НомерВерсии {get;set;}//Номер версии
		///<summary>
		///Файл версии подписан ЭЦП
		///</summary>
		[DataMember]
		[ProtoMember(14)]
		public bool ПодписанЭЦП {get;set;}//Подписан ЭЦП
		///<summary>
		///Полное наименование (длиной до 256 символов)
		///</summary>
		[DataMember]
		[ProtoMember(15)]
		public string/*(256)*/ ПолноеНаименование {get;set;}//Полное наименование
		///<summary>
		///Дополнительный путь к файлу на диске (в случае если ТипХраненияФайла - на диске)
		///</summary>
		[DataMember]
		[ProtoMember(16)]
		public string/*(0)*/ ПутьКФайлу {get;set;}//Путь к файлу
		///<summary>
		///Размер файла версии
		///</summary>
		[DataMember]
		[ProtoMember(17)]
		public decimal/*(10)*/ Размер {get;set;}
		///<summary>
		///Расширение файла версии
		///</summary>
		[DataMember]
		[ProtoMember(18)]
		public string/*(10)*/ Расширение {get;set;}
		///<summary>
		///Родительская версия для данной версии - возможна древесная структура версий
		///</summary>
		[DataMember]
		[ProtoMember(19)]
		public V82.СправочникиСсылка.ВерсииФайлов РодительскаяВерсия {get;set;}//Родительская версия
		///<summary>
		///Статус извлечения текста - для фонового задания извлечения текста
		///</summary>
		[DataMember]
		[ProtoMember(20)]
		public V82.Перечисления/*Ссылка*/.СтатусыИзвлеченияТекстаФайлов СтатусИзвлеченияТекста {get;set;}//Статус извлечения текста
		///<summary>
		///Текст, извлеченный из файла - для полнотекстового поиска
		///</summary>
		[DataMember]
		[ProtoMember(21)]
		public ХранилищеЗначения ТекстХранилище {get;set;}//Текст
		///<summary>
		///Где хранятся файлы - в базе как ХранилищеЗначения или в каталоге на диске
		///</summary>
		[DataMember]
		[ProtoMember(22)]
		public V82.Перечисления/*Ссылка*/.ТипыХраненияФайлов ТипХраненияФайла {get;set;}//Тип хранения файла
		///<summary>
		///Ссылка на том (в случае если ТипХраненияФайла - на диске)
		///</summary>
		[DataMember]
		[ProtoMember(23)]
		public V82.СправочникиСсылка.ТомаХраненияФайлов Том {get;set;}
		///<summary>
		///Файл версии
		///</summary>
		[DataMember]
		[ProtoMember(24)]
		public ХранилищеЗначения ФайлХранилище {get;set;}//Файл

		public V82.СправочникиОбъект.ВерсииФайлов  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.ВерсииФайлов();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.Автор = Автор;
			Объект.ДатаМодификацииУниверсальная = ДатаМодификацииУниверсальная;
			Объект.ДатаСоздания = ДатаСоздания;
			Объект.Зашифрован = Зашифрован;
			Объект.ИндексКартинки = ИндексКартинки;
			Объект.Комментарий = Комментарий;
			Объект.НомерВерсии = НомерВерсии;
			Объект.ПодписанЭЦП = ПодписанЭЦП;
			Объект.ПолноеНаименование = ПолноеНаименование;
			Объект.ПутьКФайлу = ПутьКФайлу;
			Объект.Размер = Размер;
			Объект.Расширение = Расширение;
			Объект.РодительскаяВерсия = РодительскаяВерсия;
			Объект.СтатусИзвлеченияТекста = СтатусИзвлеченияТекста;
			Объект.ТекстХранилище = ТекстХранилище;
			Объект.ТипХраненияФайла = ТипХраненияФайла;
			Объект.Том = Том;
			Объект.ФайлХранилище = ФайлХранилище;
			return Объект;
		}

		public void СериализацияProtoBuf(Stream Поток)
		{
			Serializer.Serialize(Поток,this);
		}
		
		public string СериализацияJson()
		{
			return this.ToJson();
		}
		
		public string СериализацияXml()
		{
			return this.ToXml();
		}
	}
}
