
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
	public partial class ИсточникиДанныхДляРасчетовБюджетирования:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("648f905b-6eba-4349-b62e-8e9390606bf4");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221190955.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public string/*100*/ Наименование {get;set;}
		public string/*(0)*/ ИмяРегистра {get;set;}//Имя регистра
		public string/*(0)*/ ПредставлениеРегистра {get;set;}//Представление регистра
		public string/*(0)*/ ТекстЗапроса {get;set;}//Текст запроса
		public ХранилищеЗначения НастройкиПостроителя {get;set;}//Настройки построителя
		public bool ПроизвольныйЗапрос {get;set;}//Произвольный запрос

		public V82.СправочникиОбъект.ИсточникиДанныхДляРасчетовБюджетирования  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.ИсточникиДанныхДляРасчетовБюджетирования();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Родитель = Родитель;
			Объект.ЭтоГруппа = ЭтоГруппа;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.ИмяРегистра = ИмяРегистра;
			Объект.ПредставлениеРегистра = ПредставлениеРегистра;
			Объект.ТекстЗапроса = ТекстЗапроса;
			Объект.НастройкиПостроителя = НастройкиПостроителя;
			Объект.ПроизвольныйЗапрос = ПроизвольныйЗапрос;
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