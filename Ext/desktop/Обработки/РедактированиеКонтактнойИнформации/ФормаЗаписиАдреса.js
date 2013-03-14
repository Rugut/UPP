Ext.define('Обработки.РедактированиеКонтактнойИнформации.ФормаЗаписиАдреса',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:330px;height:437px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Адрес',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:330px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
					]
				},
				'-',
				{
					text:'Классификатор',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:412px;width:330px;height:25px;',
			items:
			[
				{
					text:'OK',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:152px;width:314px;height:228px;',
			height: 228,width: 314,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'РегламентированныйАдрес',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Регион:',
			style: 'position:absolute;left:0px;top:0px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Регион',
			style: 'position:absolute;left:88px;top:0px;width:226px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Район:',
			style: 'position:absolute;left:0px;top:24px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Район',
			style: 'position:absolute;left:88px;top:24px;width:226px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'Город:',
			style: 'position:absolute;left:0px;top:48px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Город',
			style: 'position:absolute;left:88px;top:48px;width:226px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'Нас. пункт:',
			style: 'position:absolute;left:0px;top:72px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаселенныйПункт',
			style: 'position:absolute;left:88px;top:72px;width:226px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись10',
			text: 'Улица:',
			style: 'position:absolute;left:0px;top:96px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Улица',
			style: 'position:absolute;left:88px;top:96px;width:226px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дом',
			style: 'position:absolute;left:88px;top:120px;width:36px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Корпус',
			style: 'position:absolute;left:200px;top:120px;width:36px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Квартира',
			style: 'position:absolute;left:282px;top:120px;width:32px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись14',
			text: 'Индекс:',
			style: 'position:absolute;left:0px;top:144px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Индекс',
			style: 'position:absolute;left:88px;top:144px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись18',
			text: 'Представление:',
			style: 'position:absolute;left:0px;top:168px;width:86px;height:19px;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			name: 'Представление',
			style: 'position:absolute;left:88px;top:168px;width:226px;height:60px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТипКвартиры',
			style: 'position:absolute;left:238px;top:120px;width:42px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТипКорпуса',
			style: 'position:absolute;left:126px;top:120px;width:72px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТипДома',
			style: 'position:absolute;left:0px;top:120px;width:86px;height:19px;',
		},
					]
				},
				{
					title:'ПроизвольныйАдрес',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись19',
			text: 'Представление:',
			style: 'position:absolute;left:0px;top:24px;width:86px;height:19px;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			name: 'Представление1',
			style: 'position:absolute;left:88px;top:24px;width:226px;height:204px;',
		},
		{
			xtype: 'label',
			name: 'Надпись20',
			text: 'Страна:',
			style: 'position:absolute;left:0px;top:0px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Поле1',
			style: 'position:absolute;left:88px;top:0px;width:226px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:314px;height:92px;',
			height: 92,width: 314,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Для контактной информации',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОбъект',
			text: 'Объект:',
			style: 'position:absolute;left:0px;top:0px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись17',
			text: 'Вид адреса:',
			style: 'position:absolute;left:0px;top:27px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Вид',
			style: 'position:absolute;left:88px;top:27px;width:226px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Объект',
			style: 'position:absolute;left:88px;top:0px;width:226px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Российский адрес',
			style: 'position:absolute;left:0px;top:54px;width:116px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Адрес за пределами РФ',
			style: 'position:absolute;left:0px;top:77px;width:147px;height:15px;',
		},
					]
				},
				{
					title:'Для регламентированной отчетности',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьКодРегиона',
			text: 'Код региона:',
			style: 'position:absolute;left:6px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодРегиона',
			style: 'position:absolute;left:88px;top:27px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКодСтраны',
			text: 'Код страны:',
			style: 'position:absolute;left:6px;top:51px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодСтраны',
			style: 'position:absolute;left:88px;top:51px;width:40px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:384px;width:314px;height:20px;',
			height: 20,width: 314,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:88px;top:1px;width:226px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись15',
			text: 'Комментарий:',
			style: 'position:absolute;left:0px;top:0px;width:88px;height:19px;',
		},
					]
				},
			]
		},
	]
});