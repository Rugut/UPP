Ext.define('Обработки.КалендарьБухгалтера.ФормаНапоминания',
	{
	extend: 'Ext.window.Window',
	height: 283,width: 476,
	iconCls: 'bogus',
	title: 'Форма',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:258px;width:476px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:7px;width:460px;height:218px;',
			height: 218,width: 460,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'ТипСообщения',
				},
				{
					text:'ПоследняяДатаДействия',
				},
				{
					text:'ЗаПериод',
				},
				{
					text:'НазваниеОтчетаИлиНалога',
				},
				{
					text:'Периодичность',
				},
				{
					text:'Организация',
				},
			]
		},
		{
			xtype: 'button',
			name: 'Открыть',
			text: 'Открыть',
			style: 'position:absolute;left:8px;top:230px;width:80px;height:20px;',
		},
		{
			xtype: 'button',
			name: 'Отменить',
			text: 'Отменить',
			style: 'position:absolute;left:94px;top:230px;width:80px;height:20px;',
		},
	]
});