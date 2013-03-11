Ext.define('Справочники.ТехнологическиеКартыПроизводства.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 406,width: 660,
	iconCls: 'bogus',
	title: 'Технологические карты производства',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:588px;top:33px;width:64px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:98px;top:33px;width:446px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:98px;top:57px;width:304px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Состояние',
			style: 'position:absolute;left:98px;top:81px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаУтверждения',
			style: 'position:absolute;left:322px;top:81px;width:80px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:123px;width:644px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:147px;width:644px;height:226px;',
			height: 226,width: 644,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'НомерОперации',
				},
				{
					text:'РабочийЦентрПодготовительныхОпераций',
				},
				{
					text:'ТехнологическаяОперацияПодготовительная',
				},
				{
					text:'ЕдиницаПодготовительная',
				},
				{
					text:'КоэффициентПодготовительная',
				},
				{
					text:'ВремяПодготовительныхОпераций',
				},
				{
					text:'РабочийЦентр',
				},
				{
					text:'ТехнологическаяОперация',
				},
				{
					text:'Единица',
				},
				{
					text:'Коэффициент',
				},
				{
					text:'ВремяВыполнения',
				},
				{
					text:'Количество',
				},
				{
					text:'СледующиеОперации',
				},
				{
					text:'ДопускаетПеренос',
				},
				{
					text:'РабочийЦентрЗаключительныхОпераций',
				},
				{
					text:'ТехнологическаяОперацияЗаключительная',
				},
				{
					text:'ЕдиницаЗаключительная',
				},
				{
					text:'КоэффициентЗаключительная',
				},
				{
					text:'ВремяЗавершающихОпераций',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:660px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:381px;width:660px;height:25px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
			]
		},
	]
});