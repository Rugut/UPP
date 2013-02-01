
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
	public partial class ЭДПрисоединенныеФайлы:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("e0923338-40d1-44a1-bd03-6b1662cb1b25");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191849.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public string/*150*/ Наименование {get;set;}
		///<summary>
		///Автор - пользователь, добавивший файл
		///</summary>
		[DataMember]
		[ProtoMember(6)]
		public V82.СправочникиСсылка.Пользователи Автор {get;set;}
		[DataMember]
		[ProtoMember(7)]
		public V82.Перечисления/*Ссылка*/.ВидыЭД ВидЭД {get;set;}//Вид ЭД
		[DataMember]
		[ProtoMember(8)]
		public object ВладелецФайла {get;set;}//Владелец файла
		[DataMember]
		[ProtoMember(9)]
		public DateTime ДатаДокументаОтправителя {get;set;}//Дата документа отправителя
		[DataMember]
		[ProtoMember(10)]
		public DateTime ДатаИзмененияСтатусаЭД {get;set;}//Дата изменения статуса ЭД
		[DataMember]
		[ProtoMember(11)]
		public DateTime ДатаМодификацииУниверсальная {get;set;}//Дата модификации универсальная
		///<summary>
		///Дата добавления файла в базу
		///</summary>
		[DataMember]
		[ProtoMember(12)]
		public DateTime ДатаСоздания {get;set;}//Дата создания
		[DataMember]
		[ProtoMember(13)]
		public DateTime ДатаФормированияЭДОтправителем {get;set;}//Дата формирования ЭД отправителем
		[DataMember]
		[ProtoMember(14)]
		public bool Загружен {get;set;}
		[DataMember]
		[ProtoMember(15)]
		public bool Зашифрован {get;set;}
		///<summary>
		///Пользователь, изменивший файл
		///</summary>
		[DataMember]
		[ProtoMember(16)]
		public V82.СправочникиСсылка.Пользователи Изменил {get;set;}
		///<summary>
		///Индекс иконки, соответствующей расширению файла, для показа в списке
		///</summary>
		[DataMember]
		[ProtoMember(17)]
		public decimal/*(10)*/ ИндексКартинки {get;set;}//Индекс картинки
		[DataMember]
		[ProtoMember(18)]
		public V82.СправочникиСсылка.Контрагенты Контрагент {get;set;}
		[DataMember]
		[ProtoMember(19)]
		public V82.Перечисления/*Ссылка*/.НаправленияЭД НаправлениеЭД {get;set;}//Направление ЭД
		[DataMember]
		[ProtoMember(20)]
		public decimal/*(3)*/ НомерВерсииЭД {get;set;}//Номер версии ЭД
		[DataMember]
		[ProtoMember(21)]
		public string/*(30)*/ НомерДокументаОтправителя {get;set;}//Номер документа отправителя
		[DataMember]
		[ProtoMember(22)]
		public string/*(150)*/ НомерЭД {get;set;}//Номер ЭД
		///<summary>
		///Описание файла
		///</summary>
		[DataMember]
		[ProtoMember(23)]
		public string/*(0)*/ Описание {get;set;}
		[DataMember]
		[ProtoMember(24)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		[DataMember]
		[ProtoMember(25)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		[DataMember]
		[ProtoMember(26)]
		public string/*(50)*/ ОтправительЭД {get;set;}//Отправитель ЭД
		[DataMember]
		[ProtoMember(27)]
		public bool ПодписанЭЦП {get;set;}//Подписан ЭЦП
		[DataMember]
		[ProtoMember(28)]
		public string/*(50)*/ ПолучательЭД {get;set;}//Получатель ЭД
		[DataMember]
		[ProtoMember(29)]
		public string/*(0)*/ ПричинаОтклонения {get;set;}//Причина отклонения
		///<summary>
		///Дополнительный путь к файлу на диске (в случае, если "Тип хранения файла" - на диске)
		///</summary>
		[DataMember]
		[ProtoMember(30)]
		public string/*(0)*/ ПутьКФайлу {get;set;}//Путь к файлу
		///<summary>
		///Размер файла
		///</summary>
		[DataMember]
		[ProtoMember(31)]
		public decimal/*(10)*/ Размер {get;set;}
		///<summary>
		///Расширение файла версии
		///</summary>
		[DataMember]
		[ProtoMember(32)]
		public string/*(10)*/ Расширение {get;set;}
		///<summary>
		///Пользователь, занявший файл для редактирования
		///</summary>
		[DataMember]
		[ProtoMember(33)]
		public V82.СправочникиСсылка.Пользователи Редактирует {get;set;}
		[DataMember]
		[ProtoMember(34)]
		public V82.СправочникиСсылка.СоглашенияОбИспользованииЭД СоглашениеЭД {get;set;}//Соглашение ЭД
		///<summary>
		///Статус извлечения текста - для фонового задания извлечения текста
		///</summary>
		[DataMember]
		[ProtoMember(35)]
		public V82.Перечисления/*Ссылка*/.СтатусыИзвлеченияТекстаФайлов СтатусИзвлеченияТекста {get;set;}//Статус извлечения текста
		[DataMember]
		[ProtoMember(36)]
		public V82.Перечисления/*Ссылка*/.СтатусыЭД СтатусЭД {get;set;}//Статус ЭД
		///<summary>
		///Текст, извлеченный из файла - для полнотекстового поиска
		///</summary>
		[DataMember]
		[ProtoMember(37)]
		public ХранилищеЗначения ТекстХранилище {get;set;}//Текст
		///<summary>
		///Где хранятся файлы - в базе как ХранилищеЗначения или в каталоге на диске
		///</summary>
		[DataMember]
		[ProtoMember(38)]
		public V82.Перечисления/*Ссылка*/.ТипыХраненияФайлов ТипХраненияФайла {get;set;}//Тип хранения файла
		[DataMember]
		[ProtoMember(39)]
		public V82.Перечисления/*Ссылка*/.ТипыЭлементовВерсииЭД ТипЭлементаВерсииЭД {get;set;}//Тип элемента версии ЭД
		///<summary>
		///Ссылка на том (в случае, если "Тип хранения файла" - на диске)
		///</summary>
		[DataMember]
		[ProtoMember(40)]
		public V82.СправочникиСсылка.ТомаХраненияФайлов Том {get;set;}
		[DataMember]
		[ProtoMember(41)]
		public string/*(36)*/ УникальныйИД {get;set;}//Уникальный ИД
		///<summary>
		///Служебное поле для обмена файлами в РИБ
		///</summary>
		[DataMember]
		[ProtoMember(42)]
		public ХранилищеЗначения ФайлХранилище {get;set;}//Файл хранилище
		[DataMember]
		[ProtoMember(43)]
		public V82.СправочникиСсылка.ЭДПрисоединенныеФайлы ЭлектронныйДокументВладелец {get;set;}//Электронный документ владелец

		public V82.СправочникиОбъект.ЭДПрисоединенныеФайлы  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.ЭДПрисоединенныеФайлы();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Наименование = Наименование;
			Объект.Автор = Автор;
			Объект.ВидЭД = ВидЭД;
			Объект.ВладелецФайла = ВладелецФайла;
			Объект.ДатаДокументаОтправителя = ДатаДокументаОтправителя;
			Объект.ДатаИзмененияСтатусаЭД = ДатаИзмененияСтатусаЭД;
			Объект.ДатаМодификацииУниверсальная = ДатаМодификацииУниверсальная;
			Объект.ДатаСоздания = ДатаСоздания;
			Объект.ДатаФормированияЭДОтправителем = ДатаФормированияЭДОтправителем;
			Объект.Загружен = Загружен;
			Объект.Зашифрован = Зашифрован;
			Объект.Изменил = Изменил;
			Объект.ИндексКартинки = ИндексКартинки;
			Объект.Контрагент = Контрагент;
			Объект.НаправлениеЭД = НаправлениеЭД;
			Объект.НомерВерсииЭД = НомерВерсииЭД;
			Объект.НомерДокументаОтправителя = НомерДокументаОтправителя;
			Объект.НомерЭД = НомерЭД;
			Объект.Описание = Описание;
			Объект.Организация = Организация;
			Объект.Ответственный = Ответственный;
			Объект.ОтправительЭД = ОтправительЭД;
			Объект.ПодписанЭЦП = ПодписанЭЦП;
			Объект.ПолучательЭД = ПолучательЭД;
			Объект.ПричинаОтклонения = ПричинаОтклонения;
			Объект.ПутьКФайлу = ПутьКФайлу;
			Объект.Размер = Размер;
			Объект.Расширение = Расширение;
			Объект.Редактирует = Редактирует;
			Объект.СоглашениеЭД = СоглашениеЭД;
			Объект.СтатусИзвлеченияТекста = СтатусИзвлеченияТекста;
			Объект.СтатусЭД = СтатусЭД;
			Объект.ТекстХранилище = ТекстХранилище;
			Объект.ТипХраненияФайла = ТипХраненияФайла;
			Объект.ТипЭлементаВерсииЭД = ТипЭлементаВерсииЭД;
			Объект.Том = Том;
			Объект.УникальныйИД = УникальныйИД;
			Объект.ФайлХранилище = ФайлХранилище;
			Объект.ЭлектронныйДокументВладелец = ЭлектронныйДокументВладелец;
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
