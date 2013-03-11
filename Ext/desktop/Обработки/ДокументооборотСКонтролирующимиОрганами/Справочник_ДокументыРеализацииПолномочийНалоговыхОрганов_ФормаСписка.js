Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.Справочник_ДокументыРеализацииПолномочийНалоговыхОрганов_ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 400,
	iconCls: 'bogus',
	title: 'Справочник Документы реализации полномочий налоговых органов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:384px;height:259px;',
			height: 259,width: 384,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'ДатаДокумента',
				},
				{
					text:'НомерДокумента',
				},
				{
					text:'ВидДокумента',
				},
				{
					text:'НалоговыйОрган',
				},
				{
					text:'Организация',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:400px;height:25px;',
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