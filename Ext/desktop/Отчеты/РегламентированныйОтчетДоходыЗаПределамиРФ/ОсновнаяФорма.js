Ext.define('Отчеты.РегламентированныйОтчетДоходыЗаПределамиРФ.ОсновнаяФорма',
	{
	extend: 'Ext.window.Window',
	height: 255,width: 300,
	iconCls: 'bogus',
	title: 'Декларация о доходах за пределами РФ',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:230px;width:300px;height:25px;',
			items:
			[
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
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущийПериод',
			text: '',
			style: 'position:absolute;left:100px;top:105px;width:19px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующийПериод',
			text: '',
			style: 'position:absolute;left:273px;top:105px;width:19px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораФормы',
			text: 'Выбрать форму',
			style: 'position:absolute;left:14px;top:203px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:8px;top:27px;width:284px;height:19px;',
		},
	]
});