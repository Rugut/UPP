Ext.define('Документы.ИзменениеКадровогоПлана.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:520px;height:261px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Изменения кадрового плана',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:504px;height:220px;',
			height: 220,width: 504,
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
			style: 'position:absolute;left:0px;top:0px;width:520px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
			]
		},
	]
});