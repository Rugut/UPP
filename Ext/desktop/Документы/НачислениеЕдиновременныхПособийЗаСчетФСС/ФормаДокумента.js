Ext.define('Документы.НачислениеЕдиновременныхПособийЗаСчетФСС.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:651px;height:423px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Начисление единовременных пособий за счет ФСС',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:371px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:371px;width:549px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:651px;height:25px;',
			items:
			[
				{
					text:'Действие3',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие1',
				},
				'-',
				'-',
				{
					text:'Действие7',
				},
				'-',
				{
					text:'Действие5',
				},
				'-',
				'-',
				'-',
				{
					text:'Зарплата к выплате',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Редактировать номер',
				},
				{
					text:'',
				},
				'-',
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Действие4',
				},
				{
					text:'',
				},
				{
					text:'Действие6',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Действие2',
				},
				{
					text:'Рассчитать',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Действие3',
				},
				'-',
				'-',
				{
					text:'Действие4',
				},
				'-',
				{
					text:'Действие',
				},
				{
					text:'Списком сотрудников',
				},
				'-',
				{
					text:'Действие5',
				},
				{
					text:'Структура подчиненности документа',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:398px;width:651px;height:25px;',
			items:
			[
				{
					text:'OK',
				},
				{
					text:'Записать',
				},
				'-',
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:128px;width:635px;height:200px;',
			height: 200,width: 635,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'',
					width:'28',
				},
				{
					text:'Сотрудник',
					width:'180',
				},
				{
					text:'Вид пособия',
					width:'120',
				},
				{
					text:'Дата события',
					width:'80',
				},
				{
					text:'Сумма',
					width:'60',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:104px;width:635px;height:24px;',
			items:
			[
				{
					text:'Действие2',
				},
				'-',
				'-',
				'-',
				{
					text:'Действие3',
				},
				{
					text:'Подбор',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие7',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:336px;top:57px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:423px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:33px;width:101px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:113px;top:33px;width:205px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц',
			text: 'Месяц начисления:',
			style: 'position:absolute;left:9px;top:57px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРегистрации',
			style: 'position:absolute;left:113px;top:57px;width:205px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:336px;top:33px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:423px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОт',
			text: 'от:',
			style: 'position:absolute;left:505px;top:33px;width:16px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:523px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПредупреждение',
			text: '',
			style: 'position:absolute;left:30px;top:333px;width:401px;height:33px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:431px;top:333px;width:83px;height:33px;',
			height: 33,width: 83,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОткрытьИсправление',
			text: 'Открыть исправления',
			style: 'position:absolute;left:0px;top:0px;width:71px;height:33px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:514px;top:333px;width:129px;height:33px;',
			height: 33,width: 129,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОткрытьИсходный',
			text: 'Открыть исправленный документ',
			style: 'position:absolute;left:0px;top:0px;width:129px;height:33px;',
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:398px;width:246px;height:25px;',
			items:
			[
				'-',
				{
					text:'Расчеты нескольких сотрудников',
				},
				'-',
				{
					text:'Отменить исправление',
				},
				{
					text:'Расчеты текущего сотрудника',
				},
				{
					text:'Весь документ',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:171px;width:635px;height:24px;',
			items:
			[
				{
					text:'Действие6',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие3',
				},
				'-',
				{
					text:'Действие7',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие13',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие8',
				},
			]
		},
	]
});