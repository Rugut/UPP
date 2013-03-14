Ext.define('Документы.ЗаказНаОбслуживаниеОС.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:386px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Заказ на обслуживание ОС',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:136px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:146px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'от:',
			style: 'position:absolute;left:228px;top:33px;width:16px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:246px;top:33px;width:132px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:369px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:369px;width:282px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:346px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:346px;width:282px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Работа по обслуживанию:',
			style: 'position:absolute;left:8px;top:57px;width:136px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Услуга',
			style: 'position:absolute;left:146px;top:57px;width:232px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Причина:',
			style: 'position:absolute;left:8px;top:81px;width:136px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПричинаЗаказаНаОбслуживаниеОС',
			style: 'position:absolute;left:146px;top:81px;width:232px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись11',
			text: 'Дата обслуживания:',
			style: 'position:absolute;left:8px;top:129px;width:136px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачалаОбслуживанияОС',
			style: 'position:absolute;left:146px;top:129px;width:80px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:172px;width:370px;height:24px;',
			items:
			[
				'-',
				'-',
				{
					text:'Подбор',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:196px;width:370px;height:145px;',
			height: 145,width: 370,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Инв. №',
					width:'67',
				},
				{
					text:'Основное средство',
					width:'193',
				},
				{
					text:'Кол. услуги',
					width:'80',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:386px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
					]
				},
				'-',
				{
					text:'Открыть свойства',
				},
				{
					text:'Открыть категории',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:396px;width:386px;height:25px;',
			items:
			[
				{
					text:'Печать',
				},
				'-',
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидОбслуживанияОС',
			style: 'position:absolute;left:146px;top:105px;width:232px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись14',
			text: 'Вид обслуживания:',
			style: 'position:absolute;left:8px;top:105px;width:136px;height:19px;text-align:left;',
		},
	]
});