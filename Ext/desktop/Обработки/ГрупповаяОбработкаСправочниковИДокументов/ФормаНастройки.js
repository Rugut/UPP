Ext.define('Обработки.ГрупповаяОбработкаСправочниковИДокументов.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	height: 163,width: 316,
	iconCls: 'bogus',
	title: 'Настройка',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:138px;width:316px;height:25px;',
			items:
			[
				{
					text:'КнопкаЗакрыть',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОграничениеНаСтрокиНеограниченнойДлины',
			style: 'position:absolute;left:258px;top:111px;width:50px;height:19px;',
		},
	]
});