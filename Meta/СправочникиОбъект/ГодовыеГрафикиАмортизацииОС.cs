
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
	///(Общ)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class ГодовыеГрафикиАмортизацииОС:СправочникОбъект
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
		public string/*9*/ Код {get;set;}
		[DataMember]
		[ProtoMember(7)]
		public string/*50*/ Наименование {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(8)]
		public string/*(0)*/ Комментарий {get;set;}//Прочие сведения
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(9)]
		public decimal/*(6.3)*/ Коэффициент1 {get;set;}//Январь
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(10)]
		public decimal/*(6.3)*/ Коэффициент2 {get;set;}//Февраль
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(11)]
		public decimal/*(6.3)*/ Коэффициент3 {get;set;}//Март
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(12)]
		public decimal/*(6.3)*/ Коэффициент4 {get;set;}//Апрель
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(13)]
		public decimal/*(6.3)*/ Коэффициент5 {get;set;}//Май
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(14)]
		public decimal/*(6.3)*/ Коэффициент6 {get;set;}//Июнь
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(15)]
		public decimal/*(6.3)*/ Коэффициент7 {get;set;}//Июль
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(16)]
		public decimal/*(6.3)*/ Коэффициент8 {get;set;}//Август
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(17)]
		public decimal/*(6.3)*/ Коэффициент9 {get;set;}//Сентябрь
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(18)]
		public decimal/*(6.3)*/ Коэффициент10 {get;set;}//Октябрь
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(19)]
		public decimal/*(6.3)*/ Коэффициент11 {get;set;}//Ноябрь
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(20)]
		public decimal/*(6.3)*/ Коэффициент12 {get;set;}//Декабрь
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
						Insert Into _Reference35(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Code
						,_Description
						,_Fld993
						,_Fld994
						,_Fld995
						,_Fld996
						,_Fld997
						,_Fld998
						,_Fld999
						,_Fld1000
						,_Fld1001
						,_Fld1002
						,_Fld1003
						,_Fld1004
						,_Fld1005)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Предопределенный
						,@Код
						,@Наименование
						,@Комментарий
						,@Коэффициент1
						,@Коэффициент2
						,@Коэффициент3
						,@Коэффициент4
						,@Коэффициент5
						,@Коэффициент6
						,@Коэффициент7
						,@Коэффициент8
						,@Коэффициент9
						,@Коэффициент10
						,@Коэффициент11
						,@Коэффициент12)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Reference35
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_IsMetadata	= @Предопределенный
						,_Code	= @Код
						,_Description	= @Наименование
						,_Fld993	= @Комментарий
						,_Fld994	= @Коэффициент1
						,_Fld995	= @Коэффициент2
						,_Fld996	= @Коэффициент3
						,_Fld997	= @Коэффициент4
						,_Fld998	= @Коэффициент5
						,_Fld999	= @Коэффициент6
						,_Fld1000	= @Коэффициент7
						,_Fld1001	= @Коэффициент8
						,_Fld1002	= @Коэффициент9
						,_Fld1003	= @Коэффициент10
						,_Fld1004	= @Коэффициент11
						,_Fld1005	= @Коэффициент12
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Предопределенный", Предопределенный);
					Команда.Parameters.AddWithValue("Код", Код);
					Команда.Parameters.AddWithValue("Наименование", Наименование);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("Коэффициент1", Коэффициент1);
					Команда.Parameters.AddWithValue("Коэффициент2", Коэффициент2);
					Команда.Parameters.AddWithValue("Коэффициент3", Коэффициент3);
					Команда.Parameters.AddWithValue("Коэффициент4", Коэффициент4);
					Команда.Parameters.AddWithValue("Коэффициент5", Коэффициент5);
					Команда.Parameters.AddWithValue("Коэффициент6", Коэффициент6);
					Команда.Parameters.AddWithValue("Коэффициент7", Коэффициент7);
					Команда.Parameters.AddWithValue("Коэффициент8", Коэффициент8);
					Команда.Parameters.AddWithValue("Коэффициент9", Коэффициент9);
					Команда.Parameters.AddWithValue("Коэффициент10", Коэффициент10);
					Команда.Parameters.AddWithValue("Коэффициент11", Коэффициент11);
					Команда.Parameters.AddWithValue("Коэффициент12", Коэффициент12);
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
					Команда.CommandText = @"Delete _Reference35
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}