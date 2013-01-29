
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
	///<summary>
	///(Общ)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class Контрагенты:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("946bc5df-4474-4748-88c8-6475a2a3d688");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191631.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public bool ЭтоГруппа {get;set;}
		[DataMember]
		[ProtoMember(6)]
		public Guid Родитель {get;set;}
		[DataMember]
		[ProtoMember(7)]
		public string/*9*/ Код {get;set;}
		[DataMember]
		[ProtoMember(8)]
		public string/*100*/ Наименование {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(9)]
		public string/*(0)*/ НаименованиеПолное {get;set;}//Полное наименование
		///<summary>
		///(Общ) Любая дополнительная информация
		///</summary>
		[DataMember]
		[ProtoMember(10)]
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///(Общ) Дополнительное описание
		///</summary>
		[DataMember]
		[ProtoMember(11)]
		public string/*(0)*/ ДополнительноеОписание {get;set;}//Дополнительное описание
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(12)]
		public V82.СправочникиСсылка.Контрагенты ГоловнойКонтрагент {get;set;}//Головной контрагент
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(13)]
		public V82.СправочникиСсылка.ИсточникиИнформацииПриОбращенииПокупателей ИсточникИнформацииПриОбращении {get;set;}//Источник информации при обращении
		///<summary>
		///(Регл) 
		///</summary>
		[DataMember]
		[ProtoMember(14)]
		public string/*(10)*/ КодПоОКПО {get;set;}//Код по ОКПО
		///<summary>
		///(Регл) Идентификационный номер налогоплательщика
		///</summary>
		[DataMember]
		[ProtoMember(15)]
		public string/*(12)*/ ИНН {get;set;}
		///<summary>
		///(Регл) Идентификационный номер налогоплательщика
		///</summary>
		[DataMember]
		[ProtoMember(16)]
		public string/*(9)*/ КПП {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(17)]
		public V82.Перечисления/*Ссылка*/.ЮрФизЛицо ЮрФизЛицо {get;set;}//Юр. / физ. лицо
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(18)]
		public V82.СправочникиСсылка.БанковскиеСчета ОсновнойБанковскийСчет {get;set;}//Основной банковский счет
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(19)]
		public V82.СправочникиСсылка.ДоговорыКонтрагентов ОсновнойДоговорКонтрагента {get;set;}//Основной договор контрагента
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(20)]
		public V82.СправочникиСсылка.ВидыДеятельностиКонтрагентов ОсновнойВидДеятельности {get;set;}//Основной вид деятельности
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(21)]
		public string/*(0)*/ ДокументУдостоверяющийЛичность {get;set;}//Документ, удостоверяющий личность
		///<summary>
		///(Упр) Основной менеджер
		///</summary>
		[DataMember]
		[ProtoMember(22)]
		public V82.СправочникиСсылка.Пользователи ОсновнойМенеджерПокупателя {get;set;}//Основной менеджер покупателя
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(23)]
		public bool Покупатель {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(24)]
		public bool Поставщик {get;set;}
		///<summary>
		///(Общ) Расписание работы строкой
		///</summary>
		[DataMember]
		[ProtoMember(25)]
		public string/*(0)*/ РасписаниеРаботыСтрокой {get;set;}//Расписание работы строкой
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(26)]
		public decimal/*(3)*/ СрокВыполненияЗаказаПоставщиком {get;set;}//Срок выполнения заказа поставщиком (в днях)
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(27)]
		public V82.СправочникиСсылка.КонтактныеЛицаКонтрагентов ОсновноеКонтактноеЛицо {get;set;}//Основное контактное лицо
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(28)]
		public bool НеЯвляетсяРезидентом {get;set;}//Не является резидентом
		[DataMember]
		[ProtoMember(29)]
		public V82.СправочникиСсылка.КлассификаторОКОПФ ОКОПФ {get;set;}
		[DataMember]
		[ProtoMember(30)]
		public V82.СправочникиСсылка.Регионы Регион {get;set;}
		[DataMember]
		[ProtoMember(31)]
		public V82.СправочникиСсылка.ГруппыДоступаКонтрагентов ГруппаДоступаКонтрагента {get;set;}//Группа доступа контрагента

		public V82.СправочникиОбъект.Контрагенты  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.Контрагенты();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.ЭтоГруппа = ЭтоГруппа;
			Объект.Родитель = Родитель;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.НаименованиеПолное = НаименованиеПолное;
			Объект.Комментарий = Комментарий;
			Объект.ДополнительноеОписание = ДополнительноеОписание;
			Объект.ГоловнойКонтрагент = ГоловнойКонтрагент;
			Объект.ИсточникИнформацииПриОбращении = ИсточникИнформацииПриОбращении;
			Объект.КодПоОКПО = КодПоОКПО;
			Объект.ИНН = ИНН;
			Объект.КПП = КПП;
			Объект.ЮрФизЛицо = ЮрФизЛицо;
			Объект.ОсновнойБанковскийСчет = ОсновнойБанковскийСчет;
			Объект.ОсновнойДоговорКонтрагента = ОсновнойДоговорКонтрагента;
			Объект.ОсновнойВидДеятельности = ОсновнойВидДеятельности;
			Объект.ДокументУдостоверяющийЛичность = ДокументУдостоверяющийЛичность;
			Объект.ОсновнойМенеджерПокупателя = ОсновнойМенеджерПокупателя;
			Объект.Покупатель = Покупатель;
			Объект.Поставщик = Поставщик;
			Объект.РасписаниеРаботыСтрокой = РасписаниеРаботыСтрокой;
			Объект.СрокВыполненияЗаказаПоставщиком = СрокВыполненияЗаказаПоставщиком;
			Объект.ОсновноеКонтактноеЛицо = ОсновноеКонтактноеЛицо;
			Объект.НеЯвляетсяРезидентом = НеЯвляетсяРезидентом;
			Объект.ОКОПФ = ОКОПФ;
			Объект.Регион = Регион;
			Объект.ГруппаДоступаКонтрагента = ГруппаДоступаКонтрагента;
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
