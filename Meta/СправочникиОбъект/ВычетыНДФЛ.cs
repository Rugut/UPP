
using System;
using System.Data.SqlClient;
using System.Globalization;
using System.Runtime.Serialization;
using ProtoBuf;/*https://github.com/ServiceStack/ServiceStack/tree/master/lib*/
using ServiceStack.Text;/*https://github.com/ServiceStack/ServiceStack.Text*/
using V82;
using V82.ОбщиеОбъекты;
using V82.СправочникиСсылка;
using V82.СправочникиОбъект;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.СправочникиОбъект
{
	///<summary>
	///(Регл)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class ВычетыНДФЛ:СправочникОбъект
	{
		public bool _ЭтоНовый;
		public bool ЭтоНовый()
		{
			return _ЭтоНовый;
		}
		[DataMember]
		[ProtoMember(1)]
		public Guid Ссылка {get;set;}
		[DataMember]
		[ProtoMember(2)]
		public long Версия {get;set;}
		[DataMember]
		[ProtoMember(3)]
		public string ВерсияДанных {get;set;}
		/*static хэш сумма состава и порядка реквизитов*/
		/*версия класса восстановленного из пакета*/
		[DataMember]
		[ProtoMember(4)]
		public bool ПометкаУдаления {get;set;}
		[DataMember]
		[ProtoMember(5)]
		public bool Предопределенный {get;set;}
		[DataMember]
		[ProtoMember(6)]
		public string/*7*/ Код {get;set;}
		[DataMember]
		[ProtoMember(7)]
		public string/*150*/ Наименование {get;set;}
		[DataMember]
		[ProtoMember(8)]
		public string/*(3)*/ КодДляОтчетности2007 {get;set;}//Код для отчетности 2007 г.
		[DataMember]
		[ProtoMember(9)]
		public string/*(3)*/ КодДляОтчетности2008 {get;set;}//Код для отчетности 2008 г.
		[DataMember]
		[ProtoMember(10)]
		public string/*(3)*/ КодДляОтчетности2009 {get;set;}//Код для отчетности 2009 г.
		[DataMember]
		[ProtoMember(11)]
		public string/*(0)*/ Наименование2007 {get;set;}//Наименование 2007 г.
		[DataMember]
		[ProtoMember(12)]
		public string/*(0)*/ Наименование2008 {get;set;}//Наименование 2008 г.
		[DataMember]
		[ProtoMember(13)]
		public string/*(3)*/ КодДляОтчетности2010 {get;set;}//Код для отчетности 2010 г.
		[DataMember]
		[ProtoMember(14)]
		public bool НеПредоставляетсяНерезидентам {get;set;}//Не предоставляется нерезидентам
		[DataMember]
		[ProtoMember(15)]
		public bool НеОтражаетсяВОтчетности2010 {get;set;}//Не отражается в отчетности-2010
		[DataMember]
		[ProtoMember(16)]
		public V82.Перечисления/*Ссылка*/.ГруппыВычетовПоНДФЛ ГруппаВычета {get;set;}//Группа вычета
		[DataMember]
		[ProtoMember(17)]
		public string/*(0)*/ Наименование2010 {get;set;}//Наименование 2010 г.
		[DataMember]
		[ProtoMember(18)]
		public string/*(3)*/ КодДляОтчетности2011 {get;set;}//Код для отчетности 2011 г.
		public void Записать()
		{
			//Установка блокировки элемента на горизантально масштабированный кластер.
			//Опционально введение тайм аута на запись одного и того же объекта, не чаще раза в 5-секунд. Защита от спама. упращение алгоритма блокировки.
			//Выделение сервиса для блокировки элемента и генерации кода
			//Выполнение операций контроля без обращений к sql-серверу.
			//Контроль конфликта блокировок.
			//Контроль загрузки булкинсертом гетерогенной коллекции.
			//Контроль уникальности кода для справочников.
			//Контроль уникальности номера для документов, в границах префикса.
			//Контроль владельца, он не может быть группой.
			//Контроль владельца он должен быть задан.
			//Контроль родителя он должен быть группой.
			//Контроль количества уровней, должен соотвествовать метаданным.
			//Контроль версии, объект не должен был быть записан перед чтением текущей записи, алгоритм версионника.
			//Контроль уникальности ссылки
			//Контроль зацикливания
			//Опционально контроль битых ссылок.
			//Соблюдейние транзакционности. ПередЗаписью. Открытие транзации. Валидации. ПриЗаписи. Фиксация транзакции. Информирование о записи элемента.
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					if(_ЭтоНовый)
					{
						Команда.CommandText = @"
						Insert Into _Reference70(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Code
						,_Description
						,_Fld2017
						,_Fld2018
						,_Fld2019
						,_Fld2020
						,_Fld2021
						,_Fld2022
						,_Fld2023
						,_Fld2024
						,_Fld2025RRef
						,_Fld2026
						,_Fld2027)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Предопределенный
						,@Код
						,@Наименование
						,@КодДляОтчетности2007
						,@КодДляОтчетности2008
						,@КодДляОтчетности2009
						,@Наименование2007
						,@Наименование2008
						,@КодДляОтчетности2010
						,@НеПредоставляетсяНерезидентам
						,@НеОтражаетсяВОтчетности2010
						,@ГруппаВычета
						,@Наименование2010
						,@КодДляОтчетности2011)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Reference70
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_IsMetadata	= @Предопределенный
						,_Code	= @Код
						,_Description	= @Наименование
						,_Fld2017	= @КодДляОтчетности2007
						,_Fld2018	= @КодДляОтчетности2008
						,_Fld2019	= @КодДляОтчетности2009
						,_Fld2020	= @Наименование2007
						,_Fld2021	= @Наименование2008
						,_Fld2022	= @КодДляОтчетности2010
						,_Fld2023	= @НеПредоставляетсяНерезидентам
						,_Fld2024	= @НеОтражаетсяВОтчетности2010
						,_Fld2025RRef	= @ГруппаВычета
						,_Fld2026	= @Наименование2010
						,_Fld2027	= @КодДляОтчетности2011
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Предопределенный", Предопределенный);
					Команда.Parameters.AddWithValue("Код", Код);
					Команда.Parameters.AddWithValue("Наименование", Наименование);
					Команда.Parameters.AddWithValue("КодДляОтчетности2007", КодДляОтчетности2007);
					Команда.Parameters.AddWithValue("КодДляОтчетности2008", КодДляОтчетности2008);
					Команда.Parameters.AddWithValue("КодДляОтчетности2009", КодДляОтчетности2009);
					Команда.Parameters.AddWithValue("Наименование2007", Наименование2007);
					Команда.Parameters.AddWithValue("Наименование2008", Наименование2008);
					Команда.Parameters.AddWithValue("КодДляОтчетности2010", КодДляОтчетности2010);
					Команда.Parameters.AddWithValue("НеПредоставляетсяНерезидентам", НеПредоставляетсяНерезидентам);
					Команда.Parameters.AddWithValue("НеОтражаетсяВОтчетности2010", НеОтражаетсяВОтчетности2010);
					Команда.Parameters.AddWithValue("ГруппаВычета", ГруппаВычета.Ключ());
					Команда.Parameters.AddWithValue("Наименование2010", Наименование2010);
					Команда.Parameters.AddWithValue("КодДляОтчетности2011", КодДляОтчетности2011);
					Команда.ExecuteNonQuery();
				}
			}
		}
		public void Удалить()
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = @"Delete _Reference70
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}