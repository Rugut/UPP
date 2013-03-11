Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.Справочник_ОрганыФСГС_ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 628,
	iconCls: 'bogus',
	title: 'Органы Федеральной службы государственной статистики',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:612px;height:259px;',
			height: 259,width: 612,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Код',
				},
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:628px;height:25px;',
			items:
			[
				{
					text:'Действие10',
				},
				{
					text:'Разделитель4',
				},
			]
		},
	]
});