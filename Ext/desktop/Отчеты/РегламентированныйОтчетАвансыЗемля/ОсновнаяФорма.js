Ext.define('Отчеты.РегламентированныйОтчетАвансыЗемля.ОсновнаяФорма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:276px;height:290px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Авансы по земельному налогу',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:265px;width:276px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
				'-',
				{
					text:'Отмена',
				},
				'-',
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПериодСоставленияОтчета',
			text: '',
			style: 'position:absolute;left:42px;top:85px;width:176px;height:19px;text-align:center;',
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
			xtype: 'label',
			name: 'ОписаниеНормативДок',
			text: '',
			style: 'position:absolute;left:17px;top:138px;width:244px;height:97px;text-align:left;',
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