
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
	///(Общ)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class ИзменениеСостоянияОС:ДокументСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("8d8fe620-2d18-4bf0-9e7f-9d899edc442c");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191315.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public DateTime ВремяНапоминания {get;set;}//Время напоминания
		///<summary>
		///(Общ)
		///</summary>
		public bool ВлияетНаНачислениеАмортизации {get;set;}//Влияет на начисление амортизации
		///<summary>
		///(Общ)
		///</summary>
		public bool НапомнитьОСобытии {get;set;}//Напомнить о событии
		///<summary>
		///(Общ) Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///(Упр)
		///</summary>
		public bool НачислятьАмортизациюВТекущемМесяце {get;set;}//Начислять амортизацию в текущем месяце
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public bool ОтражатьВБухгалтерскомУчете {get;set;}//Отражать в бухгалтерском учете
		///<summary>
		///(Общ)
		///</summary>
		public bool ОтражатьВНалоговомУчете {get;set;}//Отражать в налоговом учете
		///<summary>
		///(Общ)
		///</summary>
		public bool НачислятьАмортизацию {get;set;}//Начислять амортизацию
		///<summary>
		///(Общ)
		///</summary>
		public bool ОтражатьВУправленческомУчете {get;set;}//Отражать в управленческом учете
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.СобытияОС Событие {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.СобытияОС СобытиеРегл {get;set;}//Событие (регл)
		
		public ИзменениеСостоянияОС()
		{
		}
		
		public ИзменениеСостоянияОС(byte[] УникальныйИдентификатор)
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
					,_Fld7989RRef [Ответственный]
					,_Fld7990 [ВремяНапоминания]
					,_Fld7991 [ВлияетНаНачислениеАмортизации]
					,_Fld7992 [НапомнитьОСобытии]
					,_Fld7993 [Комментарий]
					,_Fld7994 [НачислятьАмортизациюВТекущемМесяце]
					,_Fld7995RRef [Организация]
					,_Fld7996 [ОтражатьВБухгалтерскомУчете]
					,_Fld7997 [ОтражатьВНалоговомУчете]
					,_Fld7998 [НачислятьАмортизацию]
					,_Fld7999 [ОтражатьВУправленческомУчете]
					,_Fld8000RRef [Событие]
					,_Fld8001RRef [СобытиеРегл]
					From _Document395(NOLOCK)
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
							ВремяНапоминания = Читалка.GetDateTime(5);
							ВлияетНаНачислениеАмортизации = ((byte[])Читалка.GetValue(6))[0]==1;
							НапомнитьОСобытии = ((byte[])Читалка.GetValue(7))[0]==1;
							Комментарий = Читалка.GetString(8);
							НачислятьАмортизациюВТекущемМесяце = ((byte[])Читалка.GetValue(9))[0]==1;
							ОтражатьВБухгалтерскомУчете = ((byte[])Читалка.GetValue(11))[0]==1;
							ОтражатьВНалоговомУчете = ((byte[])Читалка.GetValue(12))[0]==1;
							НачислятьАмортизацию = ((byte[])Читалка.GetValue(13))[0]==1;
							ОтражатьВУправленческомУчете = ((byte[])Читалка.GetValue(14))[0]==1;
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
		
		public V82.ДокументыОбъект.ИзменениеСостоянияОС  ПолучитьОбъект()
		{
			var Объект = new V82.ДокументыОбъект.ИзменениеСостоянияОС();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Номер = Номер;
			Объект.Ответственный = Ответственный;
			Объект.ВремяНапоминания = ВремяНапоминания;
			Объект.ВлияетНаНачислениеАмортизации = ВлияетНаНачислениеАмортизации;
			Объект.НапомнитьОСобытии = НапомнитьОСобытии;
			Объект.Комментарий = Комментарий;
			Объект.НачислятьАмортизациюВТекущемМесяце = НачислятьАмортизациюВТекущемМесяце;
			Объект.Организация = Организация;
			Объект.ОтражатьВБухгалтерскомУчете = ОтражатьВБухгалтерскомУчете;
			Объект.ОтражатьВНалоговомУчете = ОтражатьВНалоговомУчете;
			Объект.НачислятьАмортизацию = НачислятьАмортизацию;
			Объект.ОтражатьВУправленческомУчете = ОтражатьВУправленческомУчете;
			Объект.Событие = Событие;
			Объект.СобытиеРегл = СобытиеРегл;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.ДокументыСсылка.ИзменениеСостоянияОС ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.ДокументыСсылка.ИзменениеСостоянияОС)Кэш[УИ];
			}
			var Ссылка = new V82.ДокументыСсылка.ИзменениеСостоянияОС(УникальныйИдентификатор);
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