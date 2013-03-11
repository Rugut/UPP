Ext.define('Справочники.ПорядокПрисвоенияСерийныхНомеров.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 316,width: 600,
	iconCls: 'bogus',
	title: 'Порядок присвоения серийных номеров',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:527px;top:33px;width:65px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:89px;top:33px;width:398px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:74px;width:584px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:98px;width:584px;height:137px;',
			height: 137,width: 584,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Источник',
				},
				{
					text:'Значение',
				},
				{
					text:'ТипРазряда',
				},
				{
					text:'РазмерРазряда',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:600px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:291px;width:600px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыОК',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыСохранить',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПримерСерийногоНомера',
			style: 'position:absolute;left:157px;top:240px;width:267px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:89px;top:264px;width:503px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоЗнаков',
			style: 'position:absolute;left:514px;top:240px;width:78px;height:19px;',
		},
	]
});