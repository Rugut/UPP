Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.Справочник_СерверыДокументооборота_ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 734,
	iconCls: 'bogus',
	title: 'Справочник Серверы документооборота',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:718px;height:259px;',
			height: 259,width: 718,
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
				{
					text:'АдресЭлектроннойПочты',
				},
				{
					text:'АдресЭлектроннойПочтыПФР',
				},
				{
					text:'АдресЭлектроннойПочтыФСГС',
				},
				{
					text:'ДлительностьОжиданияСервера',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:734px;height:25px;',
			items:
			[
				{
					text:'Разделитель4',
				},
				{
					text:'Действие10',
				},
			]
		},
	]
});