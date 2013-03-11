Ext.define('Справочники.ОбщероссийскийКлассификаторОсновныхФондов.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 251,width: 493,
	iconCls: 'bogus',
	title: 'Общероссийский классификатор основных фондов',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:48px;top:33px;width:261px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:105px;top:58px;width:380px;height:44px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонтрольноеЧисло',
			style: 'position:absolute;left:439px;top:33px;width:43px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеГруппировки',
			style: 'position:absolute;left:106px;top:108px;width:379px;height:58px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АмортизационнаяГруппа',
			style: 'position:absolute;left:160px;top:185px;width:325px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:493px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:226px;width:493px;height:25px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
			]
		},
	]
});