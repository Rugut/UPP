Ext.define('Документы.ПланированиеОбучения.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:621px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Планирование обучения',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:605px;height:380px;',
			height: 380,width: 605,
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
			style: 'position:absolute;left:0px;top:0px;width:621px;height:25px;',
			items:
			[
				{
					text:'Действие8',
				},
				'-',
				{
					text:'Структура подчиненности документа',
				},
				'-',
				'-',
				{
					text:'Действие5',
				},
				'-',
				'-',
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Действие3',
				},
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие10',
				},
				'-',
				{
					text:'Действие2',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие9',
				},
			]
		},
	]
});