Ext.define('Обработки.ЗаполнениеСчетовРасходовУСН.Форма',
	{
	extend: 'Ext.window.Window',
	height: 149,width: 226,
	iconCls: 'bogus',
	title: 'Обработка',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:226px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:124px;width:226px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыВыполнить',
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
			name: 'Дата',
			style: 'position:absolute;left:91px;top:47px;width:114px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:91px;top:78px;width:114px;height:19px;',
		},
	]
});