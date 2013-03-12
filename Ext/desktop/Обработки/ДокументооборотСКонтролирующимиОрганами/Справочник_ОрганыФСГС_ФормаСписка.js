Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.Справочник_ОрганыФСГС_ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:628px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
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
					text:'',
					width:'24',
				},
				{
					text:'Код ОФСГС',
					width:'78',
				},
				{
					text:'Наименование ТОГС',
					width:'365',
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
				'-',
			]
		},
	]
});