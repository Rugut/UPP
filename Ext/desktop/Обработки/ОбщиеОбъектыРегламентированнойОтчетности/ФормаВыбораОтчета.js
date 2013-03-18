Ext.define('Обработки.ОбщиеОбъектыРегламентированнойОтчетности.ФормаВыбораОтчета',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:700px;height:386px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Выберите отчет',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:361px;width:700px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Новый',
				},
				'-',
				{
					text:'ОК',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:9px;width:684px;height:344px;',
			height: 344,width: 684,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Наименование отчета',
					width:'120',
				},
				{
					text:'Организация',
					width:'120',
				},
				{
					text:'Период',
					width:'120',
				},
				{
					text:'ИФНС',
					width:'48',
				},
				{
					text:'Вид',
					width:'36',
				},
				{
					text:'Комментарий',
					width:'120',
				},
				{
					text:'Дата начала',
					width:'84',
				},
				{
					text:'Дата окончания',
					width:'84',
				},
				{
					text:'Периодичность',
					width:'100',
				},
				{
					text:'Источник отчета',
					width:'350',
				},
			]
		},
	]
});