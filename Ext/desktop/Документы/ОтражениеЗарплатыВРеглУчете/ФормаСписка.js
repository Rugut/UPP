Ext.define('Документы.ОтражениеЗарплатыВРеглУчете.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:700px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Отражение зарплаты в учете',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:57px;width:684px;height:356px;',
			height: 356,width: 684,
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
					width:'80',
				},
				{
					text:'Ответственный',
					width:'120',
				},
				{
					text:'Комментарий',
					width:'121',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:700px;height:25px;',
			items:
			[
				{
					text:'Дт/кт',
				},
				'-',
				{
					text:'Действие3',
				},
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Действие',
				},
				'-',
				'-',
				{
					text:'Действие7',
				},
				{
					text:'',
				},
				{
					text:'Дт/кт',
				},
				'-',
				{
					text:'Действие8',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие9',
				},
				'-',
				{
					text:'Действие13',
				},
				{
					text:'Действие6',
				},
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие12',
				},
				'-',
				'-',
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Движения документа по регистрам',
				},
				'-',
				{
					text:'Действие6',
				},
				'-',
				{
					text:'Действие5',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Действие2',
				},
				{
					text:'',
				},
				{
					text:'Действие14',
				},
				'-',
				{
					text:'Действие1',
				},
				'-',
				{
					text:'',
				},
				'-',
				'-',
				{
					text:'Действие10',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие5',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:684px;height:19px;',
			height: 19,width: 684,
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