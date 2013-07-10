
using System;
using System.Collections;
using System.IO;
using System.Data.SqlClient;
using System.Globalization;
using System.Runtime.Serialization;
using ProtoBuf;/*https://github.com/ServiceStack/ServiceStack/tree/master/lib*/
using ServiceStack.Text;/*https://github.com/ServiceStack/ServiceStack.Text*/
using V82;
using V82.ОбщиеОбъекты;
using V82.ДокументыСсылка;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.ДокументыСсылка
{
	///<summary>
	///(Регл) Акт инвентаризации расчетов с покупателями, поставщиками и прочими дебиторами и кредиторами
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class ИнвентаризацияРасчетовСконтрагентами:ДокументСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("5ed48832-a295-46a6-b680-b72278fe47da");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20120928012004.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public DateTime Дата {get;set;}
		public DateTime ПрефиксНомера {get;set;}
		public string/*11*/ Номер {get;set;}
		public bool Проведен {get;set;}
		///<summary>
		///(Общ) 
		///</summary>
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		///<summary>
		///Комментарий к документу
		///</summary>
		public string/*(0)*/ Комментарий {get;set;}
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		public DateTime ДатаНачалаИнвентаризации {get;set;}//Дата начала инвентаризации
		public DateTime ДатаОкончанияИнвентаризации {get;set;}//Дата окончания инвентаризации
		public string/*(0)*/ ПричинаПроведенияИнвентаризации {get;set;}//Причина проведения инвентаризации
		///<summary>
		///Документ-основание для проведения инвентаризации
		///</summary>
		public string/*(50)*/ ДокументОснованиеВид {get;set;}//Документ-основание
		public DateTime ДокументОснованиеДата {get;set;}//Дата документа-основания
		public string/*(10)*/ ДокументОснованиеНомер {get;set;}//Номер документа-основания
		
		public ИнвентаризацияРасчетовСконтрагентами()
		{
		}
		
		public ИнвентаризацияРасчетовСконтрагентами(byte[] УникальныйИдентификатор)
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = @"Select top 1 
					_IDRRef [Ссылка]
					,_Version [Версия]
					,_Marked [ПометкаУдаления]
					,_Number [Номер]
					,_Fld20150RRef [Организация]
					,_Fld20151 [Комментарий]
					,_Fld20152RRef [Ответственный]
					,_Fld20153 [ДатаНачалаИнвентаризации]
					,_Fld20154 [ДатаОкончанияИнвентаризации]
					,_Fld20155 [ПричинаПроведенияИнвентаризации]
					,_Fld20156 [ДокументОснованиеВид]
					,_Fld20157 [ДокументОснованиеДата]
					,_Fld20158 [ДокументОснованиеНомер]
					From _Document19660(NOLOCK)
					Where _IDRRef=@УникальныйИдентификатор";
					Команда.Parameters.AddWithValue("УникальныйИдентификатор", УникальныйИдентификатор);
					using (var Читалка = Команда.ExecuteReader())
					{
						if (Читалка.Read())
						{
							//ToDo: Читать нужно через GetValues()
							Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Номер = Читалка.GetString(3);
							Комментарий = Читалка.GetString(5);
							ДатаНачалаИнвентаризации = Читалка.GetDateTime(7);
							ДатаОкончанияИнвентаризации = Читалка.GetDateTime(8);
							ПричинаПроведенияИнвентаризации = Читалка.GetString(9);
							ДокументОснованиеВид = Читалка.GetString(10);
							ДокументОснованиеДата = Читалка.GetDateTime(11);
							ДокументОснованиеНомер = Читалка.GetString(12);
							//return Ссылка;
						}
						else
						{
							//return null;
						}
					}
				}
			}
		}
		
		public V82.ДокументыОбъект.ИнвентаризацияРасчетовСконтрагентами  ПолучитьОбъект()
		{
			var Объект = new V82.ДокументыОбъект.ИнвентаризацияРасчетовСконтрагентами();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Номер = Номер;
			Объект.Организация = Организация;
			Объект.Комментарий = Комментарий;
			Объект.Ответственный = Ответственный;
			Объект.ДатаНачалаИнвентаризации = ДатаНачалаИнвентаризации;
			Объект.ДатаОкончанияИнвентаризации = ДатаОкончанияИнвентаризации;
			Объект.ПричинаПроведенияИнвентаризации = ПричинаПроведенияИнвентаризации;
			Объект.ДокументОснованиеВид = ДокументОснованиеВид;
			Объект.ДокументОснованиеДата = ДокументОснованиеДата;
			Объект.ДокументОснованиеНомер = ДокументОснованиеНомер;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.ДокументыСсылка.ИнвентаризацияРасчетовСконтрагентами ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.ДокументыСсылка.ИнвентаризацияРасчетовСконтрагентами)Кэш[УИ];
			}
			var Ссылка = new V82.ДокументыСсылка.ИнвентаризацияРасчетовСконтрагентами(УникальныйИдентификатор);
			Кэш.Add(УИ, Ссылка);
			return Ссылка;
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