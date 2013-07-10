
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
	[ProtoContract]
	[DataContract]
	public partial class Опрос:ДокументСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("d2cbacf3-2c02-467e-8b4f-d978f57318d3");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20120928012008.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public object ОпрашиваемоеЛицо {get;set;}//Опрашиваемое лицо
		///<summary>
		///Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Комментарий {get;set;}
		public V82.СправочникиСсылка.ТиповыеАнкеты ТиповаяАнкета {get;set;}//Типовая анкета
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		public V82.ДокументыСсылка.РассылкаАнкет Рассылка {get;set;}
		public bool ОпросЗавершен {get;set;}//Опрос завершен
		
		public Опрос()
		{
		}
		
		public Опрос(byte[] УникальныйИдентификатор)
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
					,_Fld6931_TYPE [ОпрашиваемоеЛицо_Тип],_Fld6931_RRRef [ОпрашиваемоеЛицо],_Fld6931_RTRef [ОпрашиваемоеЛицо_Вид]
					,_Fld6932 [Комментарий]
					,_Fld6933RRef [ТиповаяАнкета]
					,_Fld6934RRef [Ответственный]
					,_Fld6935RRef [Рассылка]
					,_Fld21712 [ОпросЗавершен]
					From _Document343(NOLOCK)
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
							Комментарий = Читалка.GetString(7);
							Рассылка = new V82.ДокументыСсылка.РассылкаАнкет((byte[])Читалка.GetValue(10));
							ОпросЗавершен = ((byte[])Читалка.GetValue(11))[0]==1;
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
		
		public V82.ДокументыОбъект.Опрос  ПолучитьОбъект()
		{
			var Объект = new V82.ДокументыОбъект.Опрос();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Номер = Номер;
			Объект.ОпрашиваемоеЛицо = ОпрашиваемоеЛицо;
			Объект.Комментарий = Комментарий;
			Объект.ТиповаяАнкета = ТиповаяАнкета;
			Объект.Ответственный = Ответственный;
			Объект.Рассылка = Рассылка;
			Объект.ОпросЗавершен = ОпросЗавершен;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.ДокументыСсылка.Опрос ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.ДокументыСсылка.Опрос)Кэш[УИ];
			}
			var Ссылка = new V82.ДокументыСсылка.Опрос(УникальныйИдентификатор);
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