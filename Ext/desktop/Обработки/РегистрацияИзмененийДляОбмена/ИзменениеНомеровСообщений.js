Ext.define('Обработки.РегистрацияИзмененийДляОбмена.ИзменениеНомеровСообщений',
	{
	extend: 'Ext.window.Window',
	height: 87,width: 278,
	iconCls: 'bogus',
	title: 'Изменение номеров сообщений',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:62px;width:278px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыВыполнить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерОтправленного',
			style: 'position:absolute;left:190px;top:10px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерПринятого',
			style: 'position:absolute;left:190px;top:35px;width:80px;height:19px;',
		},
	]
});