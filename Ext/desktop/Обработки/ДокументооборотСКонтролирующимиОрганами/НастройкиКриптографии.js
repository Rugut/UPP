Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.НастройкиКриптографии',
	{
	extend: 'Ext.window.Window',
	height: 219,width: 606,
	iconCls: 'bogus',
	title: 'Настройки криптографии',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:194px;width:606px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'ОК',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Криптопровайдер',
			style: 'position:absolute;left:120px;top:45px;width:478px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АлгоритмПодписание',
			style: 'position:absolute;left:120px;top:89px;width:478px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АлгоритмШифрование',
			style: 'position:absolute;left:120px;top:167px;width:478px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АлгоритмХеширование',
			style: 'position:absolute;left:120px;top:141px;width:478px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АлгоритмКлючи',
			style: 'position:absolute;left:120px;top:115px;width:478px;height:19px;',
		},
	]
});