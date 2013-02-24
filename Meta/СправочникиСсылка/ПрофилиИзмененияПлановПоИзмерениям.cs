
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
	///(Упр)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class ПрофилиИзмененияПлановПоИзмерениям:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("33d713c4-d4be-4cbb-bfc1-ce09674bda5d");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191638.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
		public static readonly long КонтрольнаяСуммаКласса = 123;
		[DataMember]
		[ProtoMember(1)]
		public Guid Ссылка {get;set;}
		[DataMember]
		[ProtoMember(2)]
		public long Версия {get;set;}
		public string ВерсияДанных {get;set;}
		/*static хэш сумма состава и порядка реквизитов*/
		/*версия класса восстановленного из пакета*/
		public bool ПометкаУдаления {get;set;}
		public bool Предопределенный {get;set;}
		public Guid Родитель {get;set;}
		public bool ЭтоГруппа {get;set;}
		public string/*9*/ Код {get;set;}
		public string/*50*/ Наименование {get;set;}
		public V82.Перечисления/*Ссылка*/.ВидыРаспределенийПоИзмерениямБюджетирования ВидРаспределения {get;set;}//Вид распределения
		///<summary>
		///Измерение бюджетирования
		///</summary>
		public V82.Перечисления/*Ссылка*/.ИзмеренияБюджетирования ИзмерениеБюджетирования {get;set;}//Измерение бюджетирования
		public V82.СправочникиСсылка.ИсточникиДанныхДляРасчетовБюджетирования ИсточникДанных {get;set;}//Источник данных
		public string/*(50)*/ ПоказательИсточника {get;set;}//Показатель источника
		///<summary>
		///Значение будет распределяться по всем элементами справочника
		///</summary>
		public bool ПоВсемЭлементам {get;set;}//По всем элементам

		public V82.СправочникиОбъект.ПрофилиИзмененияПлановПоИзмерениям  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.ПрофилиИзмененияПлановПоИзмерениям();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Родитель = Родитель;
			Объект.ЭтоГруппа = ЭтоГруппа;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.ВидРаспределения = ВидРаспределения;
			Объект.ИзмерениеБюджетирования = ИзмерениеБюджетирования;
			Объект.ИсточникДанных = ИсточникДанных;
			Объект.ПоказательИсточника = ПоказательИсточника;
			Объект.ПоВсемЭлементам = ПоВсемЭлементам;
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