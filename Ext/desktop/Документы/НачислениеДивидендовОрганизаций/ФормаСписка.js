Ext.define('Документы.НачислениеДивидендовОрганизаций.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:1000px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Начисления дивидендов организации',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:57px;width:984px;height:356px;',
			height: 356,width: 984,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Дата',
					width:'132',
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
					text:'Месяц начисления',
					width:'110',
				},
				{
					text:'Дивиденды начисляемые',
					width:'120',
				},
				{
					text:'На одну акцию',
					width:'80',
				},
				{
					text:'Дивиденды полученные',
					width:'120',
				},
				{
					text:'Сотрудники',
					width:'100',
				},
				{
					text:'Ответственный',
					width:'120',
				},
				{
					text:'Комментарий',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:1000px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие8',
				},
				'-',
				{
					text:'Действие14',
				},
				{
					text:'Действие9',
				},
				'-',
				'-',
				{
					text:'Действие',
				},
				{
					text:'',
				},
				'-',
				'-',
				{
					text:'Зарплата к выплате (начисленные суммы)',
				},
				'-',
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Действие9',
				},
				'-',
				'-',
				{
					text:'Действие7',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие1',
				},
				{
					text:'',
				},
				{
					text:'Действие13',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие3',
				},
				'-',
				'-',
				{
					text:'',
				},
				{
					text:'Действие1',
				},
				'-',
				'-',
				'-',
				{
					text:'Действие6',
				},
				'-',
				{
					text:'Действие10',
				},
				{
					text:'Действие10',
				},
				{
					text:'Движения документа по регистрам',
				},
				'-',
				{
					text:'Действие6',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Действие7',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:984px;height:19px;',
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