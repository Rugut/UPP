
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
	public partial class ЗакрытиеЗаявокНаРасходованиеСредств:ДокументСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("3de9738a-6be9-4832-a7bf-155f7512328a");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191353.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		public bool ОтборЦФО {get;set;}//Отбор по ЦФО
		public V82.СправочникиСсылка.Подразделения ЦФО {get;set;}
		public bool ОтборОтветственный {get;set;}//Отбор ответственный
		///<summary>
		///Ответственный для отбора заявок
		///</summary>
		public V82.СправочникиСсылка.Пользователи ОтветственныйЗаявка {get;set;}//Ответственный заявка
		public bool ОтборКонтрагент {get;set;}//Отбор по контрагенту
		public V82.СправочникиСсылка.Контрагенты Контрагент {get;set;}
		public V82.Перечисления/*Ссылка*/.СостоянияОбъектов Состояние {get;set;}
		///<summary>
		///Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Комментарий {get;set;}
		public DateTime ОтборДатаНач {get;set;}//Дата начала отбора
		public DateTime ОтборДатаКон {get;set;}//Дата конца отбора
		
		public ЗакрытиеЗаявокНаРасходованиеСредств()
		{
		}
		
		public ЗакрытиеЗаявокНаРасходованиеСредств(byte[] УникальныйИдентификатор)
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
					,_Fld7251RRef [Ответственный]
					,_Fld7252 [ОтборЦФО]
					,_Fld7253RRef [ЦФО]
					,_Fld7254 [ОтборОтветственный]
					,_Fld7255RRef [ОтветственныйЗаявка]
					,_Fld7256 [ОтборКонтрагент]
					,_Fld7257RRef [Контрагент]
					,_Fld7258RRef [Состояние]
					,_Fld7259 [Комментарий]
					,_Fld7260 [ОтборДатаНач]
					,_Fld7261 [ОтборДатаКон]
					From _Document369(NOLOCK)
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
							ОтборЦФО = ((byte[])Читалка.GetValue(5))[0]==1;
							ОтборОтветственный = ((byte[])Читалка.GetValue(7))[0]==1;
							ОтборКонтрагент = ((byte[])Читалка.GetValue(9))[0]==1;
							Состояние = V82.Перечисления/*Ссылка*/.СостоянияОбъектов.ПустаяСсылка.Получить((byte[])Читалка.GetValue(11));
							Комментарий = Читалка.GetString(12);
							ОтборДатаНач = Читалка.GetDateTime(13);
							ОтборДатаКон = Читалка.GetDateTime(14);
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
		
		public V82.ДокументыОбъект.ЗакрытиеЗаявокНаРасходованиеСредств  ПолучитьОбъект()
		{
			var Объект = new V82.ДокументыОбъект.ЗакрытиеЗаявокНаРасходованиеСредств();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Номер = Номер;
			Объект.Ответственный = Ответственный;
			Объект.ОтборЦФО = ОтборЦФО;
			Объект.ЦФО = ЦФО;
			Объект.ОтборОтветственный = ОтборОтветственный;
			Объект.ОтветственныйЗаявка = ОтветственныйЗаявка;
			Объект.ОтборКонтрагент = ОтборКонтрагент;
			Объект.Контрагент = Контрагент;
			Объект.Состояние = Состояние;
			Объект.Комментарий = Комментарий;
			Объект.ОтборДатаНач = ОтборДатаНач;
			Объект.ОтборДатаКон = ОтборДатаКон;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.ДокументыСсылка.ЗакрытиеЗаявокНаРасходованиеСредств ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.ДокументыСсылка.ЗакрытиеЗаявокНаРасходованиеСредств)Кэш[УИ];
			}
			var Ссылка = new V82.ДокументыСсылка.ЗакрытиеЗаявокНаРасходованиеСредств(УникальныйИдентификатор);
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