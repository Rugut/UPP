Ext.define('Отчеты.РегламентированныйОтчетРасчетПлатыОкрСредаСвод.ОсновнаяФорма',
	{
	extend: 'Ext.window.Window',
	height: 236,width: 276,
	iconCls: 'bogus',
	title: 'Расчет платы за негативное воздействие на окружающую среду (сводная форма)',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:211px;width:276px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Справка',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ОК',
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
			style: 'position:absolute;left:222px;top:85px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораФормы',
			text: 'Выбрать форму',
			style: 'position:absolute;left:17px;top:184px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:8px;top:27px;width:260px;height:19px;',
		},
	]
});