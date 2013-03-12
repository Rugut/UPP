Ext.define('Документы.ДепонированиеОрганизаций.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:1000px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Депонирование организаций',
	
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
					text:'Сотрудники',
					width:'100',
				},
				{
					text:'Сумма',
					width:'80',
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
					text:'Действие12',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие11',
				},
				{
					text:'Дт/кт',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие3',
				},
				'-',
				{
					text:'Печать по умолчанию',
				},
				'-',
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие16',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие13',
				},
				'-',
				'-',
				{
					text:'Дт/кт',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие19',
				},
				{
					text:'Действие22',
				},
				'-',
				{
					text:'Действие17',
				},
				{
					text:'Действие18',
				},
				'-',
				{
					text:'Действие15',
				},
				{
					text:'Действие13',
				},
				'-',
				'-',
				{
					text:'Действие2',
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Действие9',
				},
				'-',
				{
					text:'Действие6',
				},
				'-',
				'-',
				'-',
				{
					text:'Действие21',
				},
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Действие5',
				},
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Действие20',
				},
				'-',
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