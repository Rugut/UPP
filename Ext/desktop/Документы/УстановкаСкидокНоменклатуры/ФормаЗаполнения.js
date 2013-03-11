Ext.define('Документы.УстановкаСкидокНоменклатуры.ФормаЗаполнения',
	{
	extend: 'Ext.window.Window',
	height: 59,width: 546,
	iconCls: 'bogus',
	title: 'Установка скидок номенклатуры',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Группы',
			style: 'position:absolute;left:234px;top:8px;width:304px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидСравненияГрупп',
			style: 'position:absolute;left:102px;top:8px;width:127px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроцентСкидкиНаценки',
			style: 'position:absolute;left:102px;top:32px;width:57px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОграничениеСкидкиНаценки',
			style: 'position:absolute;left:289px;top:32px;width:55px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ОК',
			text: 'ОК',
			style: 'position:absolute;left:366px;top:32px;width:82px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'Закрыть',
			text: 'Закрыть',
			style: 'position:absolute;left:456px;top:32px;width:82px;height:19px;',
		},
	]
});