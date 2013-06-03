
using System;
using System.Data.SqlClient;
using System.Globalization;
using System.Runtime.Serialization;
using ProtoBuf;/*https://github.com/ServiceStack/ServiceStack/tree/master/lib*/
using ServiceStack.Text;/*https://github.com/ServiceStack/ServiceStack.Text*/
using V82;
using V82.ОбщиеОбъекты;
using V82.ДокументыСсылка;
using V82.ДокументыОбъект;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.ДокументыОбъект
{
	///<summary>
	///(Общ)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class СдельныйНаряд:ДокументОбъект
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
		public DateTime Дата {get;set;}
		[DataMember]
		[ProtoMember(6)]
		public DateTime ПрефиксНомера {get;set;}
		[DataMember]
		[ProtoMember(7)]
		public string/*11*/ Номер {get;set;}
		[DataMember]
		[ProtoMember(8)]
		public bool Проведен {get;set;}
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(9)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(10)]
		public bool ОтражатьВУправленческомУчете {get;set;}//Отражать в управленческом учете
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(11)]
		public bool ОтражатьВБухгалтерскомУчете {get;set;}//Отражать в бухгалтерском учете
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(12)]
		public bool ОтражатьВНалоговомУчете {get;set;}//Отражать в налоговом учете
		///<summary>
		///(Общ) Любая дополнительная информация
		///</summary>
		[DataMember]
		[ProtoMember(13)]
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(14)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(15)]
		public V82.СправочникиСсылка.Подразделения Подразделение {get;set;}
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(16)]
		public object Заказ {get;set;}
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(17)]
		public V82.СправочникиСсылка.ПодразделенияОрганизаций ПодразделениеОрганизации {get;set;}//Подразделение организации
		[DataMember]
		[ProtoMember(18)]
		public string/*(100)*/ КраткийСоставДокумента {get;set;}//Краткий состав документа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(19)]
		public bool УдалитьРазвернутыйПериод {get;set;}//Удалить развернутый период
		[DataMember]
		[ProtoMember(20)]
		public bool УчитыватьКТУ {get;set;}//Учитывать КТУ
		[DataMember]
		[ProtoMember(21)]
		public bool УчитыватьТариф {get;set;}//Учитывать тариф
		[DataMember]
		[ProtoMember(22)]
		public bool УчитыватьОтработанноеВремя {get;set;}//Учитывать отработанное время
		[DataMember]
		[ProtoMember(23)]
		public bool РаспределятьТолькоПриработок {get;set;}//Распределять только приработок
		[DataMember]
		[ProtoMember(24)]
		public V82.Перечисления/*Ссылка*/.СпособыВводаДанныхОВремени СпособВводаДанных {get;set;}//Способ ввода данных
		[DataMember]
		[ProtoMember(25)]
		public DateTime ПериодРегистрации {get;set;}//Период регистрации
		[DataMember]
		[ProtoMember(26)]
		public DateTime ДатаНачалаПериода {get;set;}//Дата начала периода
		[DataMember]
		[ProtoMember(27)]
		public bool УчитыватьВремяТолькоПриРасчете {get;set;}//Учитывать время только при расчете
		public void Записать()
		{
			//Установка блокировки элемента на горизантально масштабированный кластер.
			//Опционально введение тайм аута на запись одного и того же объекта, не чаще раза в 5-секунд. Защита от спама. упращение алгоритма блокировки.
			//Выделение сервиса для блокировки элемента и генерации кода
			//Выполнение операций контроля без обращений к sql-серверу.
			//Контроль конфликта блокировок.
			//Контроль загрузки булкинсертом гетерогенной коллекции.
			//Контроль уникальности кода для Документов.
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
						Insert Into _Document586(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld16895RRef
						,_Fld16896
						,_Fld16897
						,_Fld16898
						,_Fld16899
						,_Fld16900RRef
						,_Fld16901RRef
						,_Fld16903RRef
						,_Fld16904
						,_Fld16905
						,_Fld16906
						,_Fld16907
						,_Fld16908
						,_Fld16909
						,_Fld16910RRef
						,_Fld16911
						,_Fld16912
						,_Fld16913)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@Организация
						,@ОтражатьВУправленческомУчете
						,@ОтражатьВБухгалтерскомУчете
						,@ОтражатьВНалоговомУчете
						,@Комментарий
						,@Ответственный
						,@Подразделение
						,@ПодразделениеОрганизации
						,@КраткийСоставДокумента
						,@УдалитьРазвернутыйПериод
						,@УчитыватьКТУ
						,@УчитыватьТариф
						,@УчитыватьОтработанноеВремя
						,@РаспределятьТолькоПриработок
						,@СпособВводаДанных
						,@ПериодРегистрации
						,@ДатаНачалаПериода
						,@УчитыватьВремяТолькоПриРасчете)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document586
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld16895RRef	= @Организация
						,_Fld16896	= @ОтражатьВУправленческомУчете
						,_Fld16897	= @ОтражатьВБухгалтерскомУчете
						,_Fld16898	= @ОтражатьВНалоговомУчете
						,_Fld16899	= @Комментарий
						,_Fld16900RRef	= @Ответственный
						,_Fld16901RRef	= @Подразделение
						,_Fld16903RRef	= @ПодразделениеОрганизации
						,_Fld16904	= @КраткийСоставДокумента
						,_Fld16905	= @УдалитьРазвернутыйПериод
						,_Fld16906	= @УчитыватьКТУ
						,_Fld16907	= @УчитыватьТариф
						,_Fld16908	= @УчитыватьОтработанноеВремя
						,_Fld16909	= @РаспределятьТолькоПриработок
						,_Fld16910RRef	= @СпособВводаДанных
						,_Fld16911	= @ПериодРегистрации
						,_Fld16912	= @ДатаНачалаПериода
						,_Fld16913	= @УчитыватьВремяТолькоПриРасчете
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("ОтражатьВУправленческомУчете", ОтражатьВУправленческомУчете);
					Команда.Parameters.AddWithValue("ОтражатьВБухгалтерскомУчете", ОтражатьВБухгалтерскомУчете);
					Команда.Parameters.AddWithValue("ОтражатьВНалоговомУчете", ОтражатьВНалоговомУчете);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("КраткийСоставДокумента", КраткийСоставДокумента);
					Команда.Parameters.AddWithValue("УдалитьРазвернутыйПериод", УдалитьРазвернутыйПериод);
					Команда.Parameters.AddWithValue("УчитыватьКТУ", УчитыватьКТУ);
					Команда.Parameters.AddWithValue("УчитыватьТариф", УчитыватьТариф);
					Команда.Parameters.AddWithValue("УчитыватьОтработанноеВремя", УчитыватьОтработанноеВремя);
					Команда.Parameters.AddWithValue("РаспределятьТолькоПриработок", РаспределятьТолькоПриработок);
					Команда.Parameters.AddWithValue("СпособВводаДанных", СпособВводаДанных.Ключ());
					Команда.Parameters.AddWithValue("ПериодРегистрации", ПериодРегистрации);
					Команда.Parameters.AddWithValue("ДатаНачалаПериода", ДатаНачалаПериода);
					Команда.Parameters.AddWithValue("УчитыватьВремяТолькоПриРасчете", УчитыватьВремяТолькоПриРасчете);
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
					Команда.CommandText = @"Delete _Document586
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}