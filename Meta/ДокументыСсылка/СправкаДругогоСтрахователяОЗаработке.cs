
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
	public partial class СправкаДругогоСтрахователяОЗаработке:ДокументСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("574fa903-196e-48df-b68c-bf89177730c1");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191950.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		///(Регл)
		///</summary>
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		public V82.СправочникиСсылка.СотрудникиОрганизаций Сотрудник {get;set;}
		public V82.СправочникиСсылка.ФизическиеЛица ФизЛицо {get;set;}//Физическое лицо
		public V82.СправочникиСсылка.Работодатели Страхователь {get;set;}
		public DateTime ПериодРаботыС {get;set;}//Период работы С
		public DateTime ПериодРаботыПо {get;set;}//Период работы по
		///<summary>
		///(Общ) Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		
		public СправкаДругогоСтрахователяОЗаработке()
		{
		}
		
		public СправкаДругогоСтрахователяОЗаработке(byte[] УникальныйИдентификатор)
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
					,_Fld17461RRef [Организация]
					,_Fld17462RRef [Сотрудник]
					,_Fld17463RRef [ФизЛицо]
					,_Fld17464RRef [Страхователь]
					,_Fld17465 [ПериодРаботыС]
					,_Fld17466 [ПериодРаботыПо]
					,_Fld17467 [Комментарий]
					,_Fld17468RRef [Ответственный]
					From _Document598(NOLOCK)
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
							ПериодРаботыС = Читалка.GetDateTime(8);
							ПериодРаботыПо = Читалка.GetDateTime(9);
							Комментарий = Читалка.GetString(10);
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
		
		public V82.ДокументыОбъект.СправкаДругогоСтрахователяОЗаработке  ПолучитьОбъект()
		{
			var Объект = new V82.ДокументыОбъект.СправкаДругогоСтрахователяОЗаработке();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Номер = Номер;
			Объект.Организация = Организация;
			Объект.Сотрудник = Сотрудник;
			Объект.ФизЛицо = ФизЛицо;
			Объект.Страхователь = Страхователь;
			Объект.ПериодРаботыС = ПериодРаботыС;
			Объект.ПериодРаботыПо = ПериодРаботыПо;
			Объект.Комментарий = Комментарий;
			Объект.Ответственный = Ответственный;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.ДокументыСсылка.СправкаДругогоСтрахователяОЗаработке ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.ДокументыСсылка.СправкаДругогоСтрахователяОЗаработке)Кэш[УИ];
			}
			var Ссылка = new V82.ДокументыСсылка.СправкаДругогоСтрахователяОЗаработке(УникальныйИдентификатор);
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