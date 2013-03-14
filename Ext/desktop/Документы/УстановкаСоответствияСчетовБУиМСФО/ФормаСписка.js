Ext.define('Документы.УстановкаСоответствияСчетовБУиМСФО.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:495px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Установить соответствие счетов БУ и МСФО',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:479px;height:259px;',
			height: 259,width: 479,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Номер',
					width:'80',
				},
				{
					text:'Дата',
					width:'120',
				},
				{
					text:'Комментарий',
					width:'100',
				},
				{
					text:'Ответственный',
					width:'350',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:495px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'Структура подчиненности документа',
				},
				'-',
					]
				},
			]
		},
	]
});