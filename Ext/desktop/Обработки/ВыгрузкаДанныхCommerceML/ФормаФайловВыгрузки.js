Ext.define('Обработки.ВыгрузкаДанныхCommerceML.ФормаФайловВыгрузки',
	{
	extend: 'Ext.window.Window',
	height: 367,width: 476,
	iconCls: 'bogus',
	title: 'Выгруженные файлы',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:342px;width:476px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:89px;width:460px;height:245px;',
			height: 245,width: 460,
			columns:
			[
				{
					text:'Контрагент',
				},
				{
					text:'ИмяФайла',
				},
				{
					text:'КоличествоДокументов',
				},
				{
					text:'РезультатВыгрузки',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КаталогВыгрузкиДанных',
			style: 'position:absolute;left:151px;top:45px;width:317px;height:19px;',
		},
	]
});