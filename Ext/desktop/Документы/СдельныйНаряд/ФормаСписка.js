Ext.define('Документы.СдельныйНаряд.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:1000px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Сдельные наряды на выполненные работы',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:57px;width:984px;height:235px;',
			height: 235,width: 984,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Дата',
					width:'156',
				},
				{
					text:'Номер',
					width:'80',
				},
				{
					text:'Организация',
					width:'120',
				},
				{
					text:'Месяц',
					width:'84',
				},
				{
					text:'Ответственный',
					width:'120',
				},
				{
					text:'Сотрудники',
					width:'101',
				},
				{
					text:'Подразделение организации',
					width:'100',
				},
				{
					text:'Подразделение',
					width:'100',
				},
				{
					text:'Заказ',
					width:'100',
				},
				{
					text:'Комментарий',
					width:'220',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:1000px;height:25px;',
			items:
			[
				'-',
				{
					text:'Действие25',
				},
				'-',
				{
					text:'Действие22',
				},
				{
					text:'Действие12',
				},
				'-',
				{
					text:'Действие28',
				},
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Действие18',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
				{
					text:'Действие17',
				},
				{
					text:'',
				},
				{
					text:'Действие16',
				},
				'-',
				{
					text:'Действие15',
				},
				{
					text:'Действие21',
				},
				{
					text:'Действие20',
				},
				'-',
				{
					text:'Действие21',
				},
				{
					text:'Действие15',
				},
				{
					text:'Графики работы по видам времени',
				},
				{
					text:'Действие14',
				},
				{
					text:'',
				},
				{
					text:'Действие13',
				},
				{
					text:'Действие16',
				},
				{
					text:'Действие23',
				},
				'-',
				{
					text:'Дт/кт',
				},
				'-',
				{
					text:'Действие24',
				},
				'-',
				{
					text:'Действие19',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Действие27',
				},
				{
					text:'Действие17',
				},
				{
					text:'Действие18',
				},
				{
					text:'Действие11',
				},
				{
					text:'Дт/кт',
				},
				{
					text:'Действие20',
				},
				'-',
				'-',
				'-',
				{
					text:'Действие19',
				},
				{
					text:'Действие26',
				},
				{
					text:'Действие29',
				},
				{
					text:'',
				},
				'-',
				'-',
				'-',
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:31px;width:984px;height:19px;',
			height: 19,width: 984,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Организация:',
			style: 'position:absolute;left:0px;top:0px;width:87px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:92px;top:0px;width:220px;height:19px;',
		},
					]
				},
			]
		},
	]
});