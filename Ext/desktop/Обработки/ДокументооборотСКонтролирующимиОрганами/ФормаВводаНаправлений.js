Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ФормаВводаНаправлений',
	{
	extend: 'Ext.window.Window',
	height: 116,width: 348,
	iconCls: 'bogus',
	title: 'Сведения о контролирующем органе (направление документооборота)',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:91px;width:348px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыДобавить',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодПолучателя',
			style: 'position:absolute;left:152px;top:36px;width:188px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТипПолучателя',
			style: 'position:absolute;left:152px;top:8px;width:188px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КПП',
			style: 'position:absolute;left:152px;top:64px;width:188px;height:19px;',
		},
	]
});