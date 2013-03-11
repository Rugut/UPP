Ext.define('Отчеты.РегламентированныйОтчетАвансыЗемля.ОсновнаяФорма',
	{
	extend: 'Ext.window.Window',
	height: 290,width: 276,
	iconCls: 'bogus',
	title: 'Авансы по земельному налогу',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:265px;width:276px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Справка',
				},
				{
					text:'ОК',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущийПериод',
			text: '',
			style: 'position:absolute;left:17px;top:85px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующийПериод',
			text: '',
			style: 'position:absolute;left:222px;top:85px;width:21px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораФормы',
			text: 'Выбрать форму',
			style: 'position:absolute;left:17px;top:240px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:8px;top:27px;width:260px;height:19px;',
		},
	]
});