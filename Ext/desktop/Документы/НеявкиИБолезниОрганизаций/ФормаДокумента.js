Ext.define('Документы.НеявкиИБолезниОрганизаций.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:504px;height:367px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Неявки и болезни',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:82px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:174px;top:33px;width:16px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:92px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:192px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:92px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:315px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:92px;top:315px;width:404px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:504px;height:25px;',
			items:
			[
				{
					text:'Структура подчиненности документа',
				},
				'-',
				'-',
				{
					text:'Движения документа по регистрам',
				},
				'-',
				'-',
				{
					text:'Редактировать номер',
				},
				{
					text:'Открыть свойства',
				},
				{
					text:'Открыть категории',
				},
				{
					text:'Открыть начисления',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:268px;top:342px;width:236px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
				{
					text:'OK',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:149px;width:488px;height:120px;',
			height: 120,width: 488,
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
					text:'C ...',
					width:'80',
				},
				{
					text:'Состояние',
					width:'120',
				},
				{
					text:'Освобождать/занимать ставку',
					width:'60',
				},
				{
					text:'Сторно',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:124px;width:488px;height:24px;',
			items:
			[
				{
					text:'Изменить',
				},
				{
					text:'Скопировать',
				},
				{
					text:'Действие4',
				},
				'-',
				{
					text:'Действие5',
				},
				{
					text:'Действие7',
				},
				{
					text:'Списком сотрудников',
				},
				'-',
				{
					text:'Действие6',
				},
				'-',
				{
					text:'Добавить',
				},
				{
					text:'Подбор',
				},
				{
					text:'Удалить',
				},
				{
					text:'Действие8',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:81px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:92px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПредупреждение',
			text: '',
			style: 'position:absolute;left:30px;top:276px;width:253px;height:33px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:283px;top:276px;width:83px;height:33px;',
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
			style: 'position:absolute;left:367px;top:276px;width:129px;height:33px;',
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
			style: 'position:absolute;left:0px;top:342px;width:268px;height:25px;',
			items:
			[
				'-',
				{
					text:'Отменить исправление',
				},
				{
					text:'Весь документ',
				},
				'-',
				{
					text:'Строки нескольких сотрудников',
				},
				{
					text:'Строки текущего сотрудника',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:66px;top:213px;width:389px;height:24px;',
			items:
			[
				{
					text:'',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Скопировать',
				},
				{
					text:'Изменить',
				},
				{
					text:'Действие10',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Действие9',
				},
				{
					text:'Действие12',
				},
				{
					text:'Удалить',
				},
				{
					text:'Действие14',
				},
				{
					text:'Добавить',
				},
				{
					text:'Действие13',
				},
				{
					text:'Действие4',
				},
				'-',
				{
					text:'Действие6',
				},
				{
					text:'Действие7',
				},
			]
		},
	]
});