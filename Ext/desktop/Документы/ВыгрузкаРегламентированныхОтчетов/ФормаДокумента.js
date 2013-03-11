Ext.define('Документы.ВыгрузкаРегламентированныхОтчетов.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 450,width: 720,
	iconCls: 'bogus',
	title: '',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:720px;height:25px;',
			items:
			[
				{
					text:'Разделитель4',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'Подменю',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:425px;width:720px;height:25px;',
			items:
			[
				{
					text:'РазделительШифрованиеИОтправка',
				},
				{
					text:'Проверить',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'Сохранить',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'ОсновныеДействияФормыОК',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыСохранить',
				},
				{
					text:'КнопкаШифрованиеИОтправка',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'СформироватьТекстыВыгрузки',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:93px;top:33px;width:102px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:216px;top:33px;width:127px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:93px;top:57px;width:251px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:138px;width:704px;height:258px;',
			height: 258,width: 704,
			items:
			[
				{
					title:'Отчеты',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодИМНС',
			style: 'position:absolute;left:424px;top:57px;width:62px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:90px;top:398px;width:622px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Год',
			style: 'position:absolute;left:93px;top:81px;width:60px;height:20px;',
		},
	]
});