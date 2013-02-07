
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
	public partial class ФизическиеЛица:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("37da5337-6ed4-44c5-9da2-d62e588c2698");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191733.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public string/*10*/ Код {get;set;}
		[DataMember]
		[ProtoMember(8)]
		public string/*50*/ Наименование {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(9)]
		public DateTime ДатаРождения {get;set;}//Дата рождения
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(10)]
		public string/*(12)*/ ИНН {get;set;}
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(11)]
		public string/*(4)*/ КодИМНС {get;set;}//Код ИФНС
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(12)]
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(13)]
		public string/*(14)*/ СтраховойНомерПФР {get;set;}//Страховой номер ПФР
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(14)]
		public V82.Перечисления/*Ссылка*/.ПолФизическихЛиц Пол {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(15)]
		public string/*(240)*/ МестоРождения {get;set;}//Место рождения
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(16)]
		public V82.СправочникиСсылка.ХранилищеДополнительнойИнформации ОсновноеИзображение {get;set;}//Основное изображение
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(17)]
		public string/*(11)*/ МестоРожденияКодПоОКАТО {get;set;}//Место рождения - код по ОКАТО
		[DataMember]
		[ProtoMember(18)]
		public V82.СправочникиСсылка.ГруппыДоступаФизическихЛиц ГруппаДоступаФизическогоЛица {get;set;}//Группа доступа физического лица
		[DataMember]
		[ProtoMember(19)]
		public V82.Перечисления/*Ссылка*/.ВидыЛьготПриНачисленииБольничных ЛьготаПриНачисленииПособий {get;set;}//Льгота при начислении пособий
		[DataMember]
		[ProtoMember(20)]
		public bool ИмеетНаучныеТруды {get;set;}//Имеет научные труды
		[DataMember]
		[ProtoMember(21)]
		public bool ИмеетИзобретения {get;set;}//Имеет изобретения

		public V82.СправочникиОбъект.ФизическиеЛица  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.ФизическиеЛица();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.ЭтоГруппа = ЭтоГруппа;
			Объект.Родитель = Родитель;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.ДатаРождения = ДатаРождения;
			Объект.ИНН = ИНН;
			Объект.КодИМНС = КодИМНС;
			Объект.Комментарий = Комментарий;
			Объект.СтраховойНомерПФР = СтраховойНомерПФР;
			Объект.Пол = Пол;
			Объект.МестоРождения = МестоРождения;
			Объект.ОсновноеИзображение = ОсновноеИзображение;
			Объект.МестоРожденияКодПоОКАТО = МестоРожденияКодПоОКАТО;
			Объект.ГруппаДоступаФизическогоЛица = ГруппаДоступаФизическогоЛица;
			Объект.ЛьготаПриНачисленииПособий = ЛьготаПриНачисленииПособий;
			Объект.ИмеетНаучныеТруды = ИмеетНаучныеТруды;
			Объект.ИмеетИзобретения = ИмеетИзобретения;
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