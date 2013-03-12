Ext.define('Документы.ПрохождениеКурсаОбучения.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:1000px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Прохождения курсов обучения',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:984px;height:380px;',
			height: 380,width: 984,
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
					text:'Курс обучения',
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
					text:'Движения документа по регистрам',
				},
				'-',
				'-',
				'-',
				'-',
				'-',
				{
					text:'Действие10',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие9',
				},
				'-',
				{
					text:'Структура подчиненности документа',
				},
				'-',
				{
					text:'Действие6',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие7',
				},
				'-',
				{
					text:'Действие2',
				},
			]
		},
	]
});