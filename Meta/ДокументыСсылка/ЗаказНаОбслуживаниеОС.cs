
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
	///(Упр)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class ЗаказНаОбслуживаниеОС:ДокументСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("fb0acbd0-a6bb-4b06-a0e2-57b58ec3e8a7");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191628.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		///(Упр)
		///</summary>
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///(Упр)
		///</summary>
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		///<summary>
		///(Упр)
		///</summary>
		public V82.СправочникиСсылка.Номенклатура Услуга {get;set;}//Работа по обслуживанию
		///<summary>
		///(Упр)
		///</summary>
		public V82.СправочникиСсылка.ПричиныОбслуживанияОС ПричинаЗаказаНаОбслуживаниеОС {get;set;}//Причина заказа на обслуживание ОС
		///<summary>
		///(Упр)
		///</summary>
		public DateTime ДатаОбслуживанияОС {get;set;}//Дата обслуживания ОС
		///<summary>
		///(Упр)
		///</summary>
		public V82.СправочникиСсылка.ВидыОбслуживанияОсновныхСредств ВидОбслуживанияОС {get;set;}//Вид обслуживания ОС
		
		public ЗаказНаОбслуживаниеОС()
		{
		}
		
		public ЗаказНаОбслуживаниеОС(byte[] УникальныйИдентификатор)
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
					,_Fld6908 [Комментарий]
					,_Fld6909RRef [Ответственный]
					,_Fld6910RRef [Услуга]
					,_Fld6911RRef [ПричинаЗаказаНаОбслуживаниеОС]
					,_Fld6912 [ДатаОбслуживанияОС]
					,_Fld6913RRef [ВидОбслуживанияОС]
					From _Document360(NOLOCK)
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
							Комментарий = Читалка.GetString(4);
							ДатаОбслуживанияОС = Читалка.GetDateTime(8);
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
		
		public V82.ДокументыОбъект.ЗаказНаОбслуживаниеОС  ПолучитьОбъект()
		{
			var Объект = new V82.ДокументыОбъект.ЗаказНаОбслуживаниеОС();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Номер = Номер;
			Объект.Комментарий = Комментарий;
			Объект.Ответственный = Ответственный;
			Объект.Услуга = Услуга;
			Объект.ПричинаЗаказаНаОбслуживаниеОС = ПричинаЗаказаНаОбслуживаниеОС;
			Объект.ДатаОбслуживанияОС = ДатаОбслуживанияОС;
			Объект.ВидОбслуживанияОС = ВидОбслуживанияОС;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.ДокументыСсылка.ЗаказНаОбслуживаниеОС ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.ДокументыСсылка.ЗаказНаОбслуживаниеОС)Кэш[УИ];
			}
			var Ссылка = new V82.ДокументыСсылка.ЗаказНаОбслуживаниеОС(УникальныйИдентификатор);
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