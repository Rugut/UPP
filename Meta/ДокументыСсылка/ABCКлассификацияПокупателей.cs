
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
	public partial class ABCКлассификацияПокупателей:ДокументСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("467a071f-ef2e-45b6-acdd-a4156fb28fb5");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191917.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public DateTime ДатаНачала {get;set;}//Дата начала
		public DateTime ДатаОкончания {get;set;}//Дата окончания
		public decimal/*(4.2)*/ ПроцентAКласса {get;set;}//Процент А класса
		public decimal/*(4.2)*/ ПроцентBКласса {get;set;}//Процент B класса
		public decimal/*(4.2)*/ ПроцентCКласса {get;set;}//Процент С класса
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		
		public ABCКлассификацияПокупателей()
		{
		}
		
		public ABCКлассификацияПокупателей(byte[] УникальныйИдентификатор)
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
					,_Fld4357 [ДатаНачала]
					,_Fld4358 [ДатаОкончания]
					,_Fld4359 [ПроцентAКласса]
					,_Fld4360 [ПроцентBКласса]
					,_Fld4361 [ПроцентCКласса]
					,_Fld4362 [Комментарий]
					,_Fld4363RRef [Ответственный]
					From _Document297(NOLOCK)
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
							ДатаНачала = Читалка.GetDateTime(4);
							ДатаОкончания = Читалка.GetDateTime(5);
							ПроцентAКласса = Читалка.GetDecimal(6);
							ПроцентBКласса = Читалка.GetDecimal(7);
							ПроцентCКласса = Читалка.GetDecimal(8);
							Комментарий = Читалка.GetString(9);
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
		
		public V82.ДокументыОбъект.ABCКлассификацияПокупателей  ПолучитьОбъект()
		{
			var Объект = new V82.ДокументыОбъект.ABCКлассификацияПокупателей();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Номер = Номер;
			Объект.ДатаНачала = ДатаНачала;
			Объект.ДатаОкончания = ДатаОкончания;
			Объект.ПроцентAКласса = ПроцентAКласса;
			Объект.ПроцентBКласса = ПроцентBКласса;
			Объект.ПроцентCКласса = ПроцентCКласса;
			Объект.Комментарий = Комментарий;
			Объект.Ответственный = Ответственный;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.ДокументыСсылка.ABCКлассификацияПокупателей ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.ДокументыСсылка.ABCКлассификацияПокупателей)Кэш[УИ];
			}
			var Ссылка = new V82.ДокументыСсылка.ABCКлассификацияПокупателей(УникальныйИдентификатор);
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