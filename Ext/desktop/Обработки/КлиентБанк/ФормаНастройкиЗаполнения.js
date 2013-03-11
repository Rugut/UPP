Ext.define('Обработки.КлиентБанк.ФормаНастройкиЗаполнения',
	{
	extend: 'Ext.window.Window',
	height: 286,width: 670,
	iconCls: 'bogus',
	title: 'Настройка',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:261px;width:670px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Действие1',
				},
				{
					text:'ОсновныеДействияФормыОК',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:654px;height:222px;',
			height: 222,width: 654,
			items:
			[
				{
					title:'Страница2',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:92px;width:317px;height:101px;',
			height: 101,width: 317,
			columns:
			[
				{
					text:'_',
				},
				{
					text:'Документ',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Программа',
			style: 'position:absolute;left:129px;top:41px;width:348px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФайлЗагрузки',
			style: 'position:absolute;left:353px;top:92px;width:293px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФайлВыгрузки',
			style: 'position:absolute;left:353px;top:135px;width:293px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'БанковскийСчет',
			style: 'position:absolute;left:129px;top:12px;width:348px;height:19px;',
		},
					]
				},
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:640px;height:156px;',
			height: 156,width: 640,
			columns:
			[
				{
					text:'Документ',
				},
				{
					text:'Проводить',
				},
				{
					text:'СтатьяДДС',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГруппаДляНовыхКонтрагентов',
			style: 'position:absolute;left:184px;top:173px;width:240px;height:19px;',
		},
					]
				},
			]
		},
	]
});