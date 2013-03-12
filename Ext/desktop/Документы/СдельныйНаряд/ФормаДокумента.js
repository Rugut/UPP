Ext.define('Документы.СдельныйНаряд.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:692px;height:577px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Сдельный наряд на выполненные работы',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:94px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:194px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Организация:',
			style: 'position:absolute;left:336px;top:57px;width:83px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:424px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:525px;width:83px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:525px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Ответственный:',
			style: 'position:absolute;left:336px;top:525px;width:83px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:424px;top:525px;width:260px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделение',
			text: 'Подразделение:',
			style: 'position:absolute;left:8px;top:57px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:94px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Заказ:',
			style: 'position:absolute;left:338px;top:81px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Заказ',
			style: 'position:absolute;left:424px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:692px;height:25px;',
			items:
			[
				'-',
				{
					text:'Показать/скрыть счета учета',
				},
				{
					text:'Движения документа по регистрам',
				},
				'-',
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'',
				},
				{
					text:'Дт/кт',
				},
				'-',
				{
					text:'Дт/кт',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Графики работы по видам времени',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:552px;width:692px;height:25px;',
			items:
			[
				{
					text:'Печать',
				},
				'-',
				{
					text:'Закрыть',
				},
				{
					text:'OK',
				},
				{
					text:'Записать',
				},
				'-',
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОтраженияВУчете',
			text: 'Отразить в:',
			style: 'position:absolute;left:336px;top:33px;width:83px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:189px;width:676px;height:331px;',
			height: 331,width: 676,
			items:
			[
				{
					title:'Выполненные работы',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:622px;height:24px;',
			items:
			[
				{
					text:'Закончить редактирование',
				},
				{
					text:'&Удалить',
				},
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Переместить вниз',
				},
				{
					text:'&Добавить',
				},
				{
					text:'Сортировать по возрастанию',
				},
				'-',
				{
					text:'&Изменить',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'Сортировать по убыванию',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:662px;height:267px;',
			height: 267,width: 662,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Технологическая операция',
					width:'150',
				},
				{
					text:'Статья затрат',
					width:'80',
				},
				{
					text:'Расценка',
					width:'60',
				},
				{
					text:'Валюта',
					width:'60',
				},
				{
					text:'Количество',
					width:'80',
				},
				{
					text:'Сумма в валюте расценки',
					width:'100',
				},
				{
					text:'Сумма за работу',
					width:'100',
				},
				{
					text:'Сумма за работу (регл)',
					width:'100',
				},
				{
					text:'Расходы в НУ',
					width:'100',
				},
				{
					text:'Счет бух.учета',
					width:'100',
				},
				{
					text:'Счет нал. учета',
					width:'100',
				},
				{
					text:'Аналитика',
					width:'100',
				},
				{
					text:'Номенклатурная группа',
					width:'130',
				},
				{
					text:'Продукция',
					width:'100',
				},
				{
					text:'Характеристика продукции',
					width:'100',
				},
				{
					text:'Серия продукции',
					width:'100',
				},
				{
					text:'Объект строительства',
					width:'100',
				},
				{
					text:'Способ строительства',
					width:'100',
				},
				{
					text:'Способ распределения затрат на выпуск',
					width:'100',
				},
				{
					text:'Проект',
					width:'100',
				},
				{
					text:'Подразделение организации',
					width:'100',
				},
			]
		},
					]
				},
				{
					title:'Исполнители',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:140px;width:668px;height:24px;',
			items:
			[
				{
					text:'Сортировать по возрастанию',
				},
				'-',
				{
					text:'&Удалить',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'По всем сотрудникам',
				},
				{
					text:'&Переместить вниз',
				},
				'-',
				{
					text:'Закончить редактирование',
				},
				{
					text:'Рассчитать с комментарием',
				},
				'-',
				{
					text:'Списком работников',
				},
				{
					text:'&Добавить',
				},
				{
					text:'Подбор',
				},
				{
					text:'Рассчитать',
				},
				'-',
				'-',
				{
					text:'&Переместить вверх',
				},
				{
					text:'Сортировать по убыванию',
				},
				{
					text:'&Изменить',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:165px;width:668px;height:137px;',
			height: 137,width: 668,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Таб. №',
					width:'68',
				},
				{
					text:'Сотрудник',
					width:'120',
				},
				{
					text:'КТУ',
					width:'60',
				},
				{
					text:'Тариф',
					width:'50',
				},
				{
					text:'Отработано часов',
					width:'100',
				},
				{
					text:'Отработано дней',
					width:'100',
				},
				{
					text:'Сумма к начислению',
					width:'100',
				},
				{
					text:'Сумма к начислению (регл)',
					width:'100',
				},
				{
					text:'1',
					width:'30',
				},
				{
					text:'2',
					width:'30',
				},
				{
					text:'3',
					width:'30',
				},
				{
					text:'4',
					width:'30',
				},
				{
					text:'5',
					width:'30',
				},
				{
					text:'6',
					width:'30',
				},
				{
					text:'7',
					width:'30',
				},
				{
					text:'8',
					width:'30',
				},
				{
					text:'9',
					width:'30',
				},
				{
					text:'10',
					width:'30',
				},
				{
					text:'11',
					width:'30',
				},
				{
					text:'12',
					width:'30',
				},
				{
					text:'13',
					width:'30',
				},
				{
					text:'14',
					width:'30',
				},
				{
					text:'15',
					width:'30',
				},
				{
					text:'16',
					width:'30',
				},
				{
					text:'17',
					width:'30',
				},
				{
					text:'18',
					width:'30',
				},
				{
					text:'19',
					width:'30',
				},
				{
					text:'20',
					width:'30',
				},
				{
					text:'21',
					width:'30',
				},
				{
					text:'22',
					width:'30',
				},
				{
					text:'23',
					width:'30',
				},
				{
					text:'24',
					width:'30',
				},
				{
					text:'25',
					width:'30',
				},
				{
					text:'26',
					width:'30',
				},
				{
					text:'27',
					width:'30',
				},
				{
					text:'28',
					width:'30',
				},
				{
					text:'29',
					width:'30',
				},
				{
					text:'30',
					width:'30',
				},
				{
					text:'31',
					width:'30',
				},
				{
					text:'Вид времени',
					width:'100',
				},
				{
					text:'Дней',
					width:'50',
				},
				{
					text:'Часов',
					width:'50',
				},
				{
					text:'Вид времени',
					width:'100',
				},
				{
					text:'Дней',
					width:'50',
				},
				{
					text:'Часов',
					width:'50',
				},
				{
					text:'Вид времени',
					width:'100',
				},
				{
					text:'Дней',
					width:'50',
				},
				{
					text:'Часов',
					width:'50',
				},
				{
					text:'Вид времени',
					width:'100',
				},
				{
					text:'Дней',
					width:'50',
				},
				{
					text:'Часов',
					width:'50',
				},
				{
					text:'Вид времени',
					width:'100',
				},
				{
					text:'Дней',
					width:'50',
				},
				{
					text:'Часов',
					width:'50',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:35px;width:668px;height:105px;',
			height: 105,width: 668,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Распределять только приработок',
			style: 'position:absolute;left:8px;top:20px;width:193px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Учитывать КТУ',
			style: 'position:absolute;left:8px;top:39px;width:117px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Учитывать тариф',
			style: 'position:absolute;left:8px;top:59px;width:117px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Учитывать отработанное время',
			style: 'position:absolute;left:223px;top:20px;width:193px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСпособВводаДанных',
			text: 'Способ ввода времени',
			style: 'position:absolute;left:450px;top:20px;width:189px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'от:',
			style: 'position:absolute;left:176px;top:33px;width:16px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:499px;top:33px;width:69px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'нал. учете',
			style: 'position:absolute;left:574px;top:33px;width:69px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'упр. учете',
			style: 'position:absolute;left:424px;top:33px;width:69px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделениеОрганизации',
			text: 'Подразделение организации:',
			style: 'position:absolute;left:8px;top:77px;width:84px;height:27px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеОрганизации',
			style: 'position:absolute;left:94px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:106px;width:676px;height:78px;',
			height: 78,width: 676,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРегистрации',
			style: 'position:absolute;left:228px;top:51px;width:110px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачалаПериода',
			style: 'position:absolute;left:228px;top:27px;width:110px;height:19px;',
		},
					]
				},
			]
		},
	]
});